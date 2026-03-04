/**
 * GenoMAX² Dual-Store Shopify Storefront API Client
 * ===================================================
 * MAXimo² → genomax-2.myshopify.com  (legacy custom app token)
 * MAXima² → fetkqh-60.myshopify.com  (headless channel public token)
 *
 * Usage:
 *   import { fetchProducts, createStorefrontCheckout } from '@/lib/shopify';
 *   const products = await fetchProducts(10, 'MAXimo²');
 *   const url     = await createStorefrontCheckout(items, 'MAXima²');
 */

const SHOPIFY_API_VERSION = '2025-07';

// Store configuration — one entry per environment
const STORES: Record<string, { domain: string; token: string }> = {
  'MAXimo²': {
    domain: 'genomax-2.myshopify.com',
    token: '9f024b81187b1ca3324ae326bd5bc7fd',
  },
  'MAXima²': {
    domain: 'fetkqh-60.myshopify.com',
    token: '1bb6d8709944e7cd1ae59137ced719b3',
  },
};

// Default store when none is specified (male-first assumption at checkout)
const DEFAULT_STORE = 'MAXimo²';

function getStoreConfig(env?: string) {
  const key = env && STORES[env] ? env : DEFAULT_STORE;
  const cfg = STORES[key];
  return {
    url: `https://${cfg.domain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    token: cfg.token,
  };
}

// ─── Interfaces ────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

// ─── GraphQL Queries ────────────────────────────────────────────────────────

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// ─── Core request helper ────────────────────────────────────────────────────

export async function storefrontApiRequest(
  query: string,
  variables: Record<string, unknown> = {},
  env?: string,
) {
  const { url, token } = getStoreConfig(env);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify Storefront HTTP ${response.status} for store ${env ?? DEFAULT_STORE}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(
      `Shopify Storefront error: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`,
    );
  }

  return data;
}

// ─── Public API ─────────────────────────────────────────────────────────────

/** Fetch products from a specific store environment. */
export async function fetchProducts(
  first = 10,
  env?: string,
): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(STOREFRONT_QUERY, { first }, env);
  return data.data.products.edges;
}

/**
 * Create a Shopify cart and return the checkout URL.
 * All items must belong to the same store (env).
 */
export async function createStorefrontCheckout(
  items: CartItem[],
  env?: string,
): Promise<string> {
  const lines = items.map(item => ({
    quantity: item.quantity,
    merchandiseId: item.variantId,
  }));

  const cartData = await storefrontApiRequest(
    CART_CREATE_MUTATION,
    { input: { lines } },
    env,
  );

  const { userErrors, cart } = cartData.data.cartCreate;

  if (userErrors.length > 0) {
    throw new Error(
      `Cart creation failed: ${userErrors.map((e: { message: string }) => e.message).join(', ')}`,
    );
  }

  if (!cart?.checkoutUrl) {
    throw new Error('No checkout URL returned from Shopify');
  }

  const url = new URL(cart.checkoutUrl);
  url.searchParams.set('channel', 'online_store');
  return url.toString();
}
