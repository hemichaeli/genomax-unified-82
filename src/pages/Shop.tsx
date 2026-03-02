import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Search, Loader2, ExternalLink, Shield, Package, Clock } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

const SHOPIFY_STORES: Record<string, { url: string; cart: string }> = {
  "MAXimo\u00B2": {
    url: "https://genomax-2.myshopify.com",
    cart: "https://genomax-2.myshopify.com/cart",
  },
  "MAXima\u00B2": {
    url: "https://fetkqh-60.myshopify.com",
    cart: "https://fetkqh-60.myshopify.com/cart",
  },
};

interface Product {
  module_code: string;
  product_name: string;
  os_environment: string;
  category_prefix: string;
  evidence_tier: number;
  shopify_handle?: string;
  shopify_variant_id?: string;
  front_label_text?: string;
  supliful_price?: number;
  dosing_window?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  CAR: "Cardiovascular",
  CEL: "Cellular Health",
  DIG: "Digestive",
  GLU: "Glucose & Metabolic",
  HOR: "Hormonal",
  IMM: "Immune",
  MET: "Metabolic",
  MUS: "Muscle & Recovery",
  NEU: "Neuro & Cognitive",
};

const DOSING_LABELS: Record<string, { label: string; color: string }> = {
  morning_fasted: { label: "AM Fasted", color: "#00AEEF" },
  midday_with_food: { label: "Midday", color: "#FFD600" },
  evening_before_sleep: { label: "PM", color: "#9B59B6" },
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [envFilter, setEnvFilter] = useState<"all" | "MAXimo\u00B2" | "MAXima\u00B2">("all");
  const [catFilter, setCatFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/catalog/wiring/products`);
        if (res.ok) {
          const data = await res.json();
          const items = (data.products || data || []).filter(
            (p: Product) => p.product_name && p.evidence_tier && p.evidence_tier <= 2
          );
          setProducts(items);
        } else {
          setError("Could not load product catalog.");
        }
      } catch {
        setError("API unavailable. Please try again later.");
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((p) => {
    if (envFilter !== "all" && p.os_environment !== envFilter) return false;
    if (catFilter !== "all" && p.category_prefix !== catFilter) return false;
    if (search && !p.product_name?.toLowerCase().includes(search.toLowerCase()) && !p.module_code?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const categories = [...new Set(products.map((p) => p.category_prefix))].sort();

  const getProductUrl = (product: Product) => {
    const store = SHOPIFY_STORES[product.os_environment];
    if (store && product.shopify_handle) {
      return `${store.url}/products/${product.shopify_handle}`;
    }
    return null;
  };

  const getAddToCartUrl = (product: Product) => {
    const store = SHOPIFY_STORES[product.os_environment];
    if (store && product.shopify_variant_id) {
      return `${store.cart}/add?id=${product.shopify_variant_id}&quantity=1`;
    }
    return null;
  };

  const shoppableCount = products.filter((p) => p.shopify_handle).length;
  const totalCount = products.length;

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-4">
            <Package className="w-3 h-3" />
            <span>Supliful-Fulfilled Precision Modules</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Precision <span className="text-[#FF1F23]">Modules</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-6">
            Every module in our catalog is backed by meta-analytic evidence and classified through our three-tier evidence system. TIER 1 and TIER 2 modules only.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B7A90]">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-[#00E676]" /> TIER 1: Strong meta-analytic evidence</span>
            <span className="text-[#1A2030]">|</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-[#009BFF]" /> TIER 2: Contextual/emerging evidence</span>
            {!loading && (
              <>
                <span className="text-[#1A2030]">|</span>
                <span className="flex items-center gap-1"><ShoppingCart className="w-3 h-3 text-[#FF1F23]" /> {shoppableCount}/{totalCount} available for purchase</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-[#1A2030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7A90]" />
              <input
                type="text"
                placeholder="Search modules..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none"
              />
            </div>

            <div className="flex gap-2">
              {(["all", "MAXimo\u00B2", "MAXima\u00B2"] as const).map((env) => (
                <button
                  key={env}
                  onClick={() => setEnvFilter(env)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    envFilter === env
                      ? env === "MAXimo\u00B2"
                        ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]"
                        : env === "MAXima\u00B2"
                        ? "border-[#E6007A] bg-[#E6007A]/10 text-[#E6007A]"
                        : "border-[#FF1F23] bg-[#FF1F23]/10 text-[#FF1F23]"
                      : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
                  }`}
                >
                  {env === "all" ? "All" : env}
                </button>
              ))}
            </div>

            <select
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value)}
              className="bg-[#0D1117] border border-[#1A2030] rounded-lg px-3 py-2 text-xs text-[#6B7A90] focus:border-[#FF1F23] focus:outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{CATEGORY_LABELS[c] || c}</option>
              ))}
            </select>

            <span className="text-xs text-[#6B7A90] font-mono ml-auto">{filtered.length} modules</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="w-8 h-8 text-[#FF1F23] mx-auto animate-spin" />
              <p className="text-sm text-[#6B7A90] mt-4">Loading catalog from Supliful storefront...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-sm text-[#FF1F23]">{error}</p>
              <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2 mt-4">
                Start With Assessment Instead <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((product) => {
                const productUrl = getProductUrl(product);
                const cartUrl = getAddToCartUrl(product);
                const dosingInfo = product.dosing_window ? DOSING_LABELS[product.dosing_window] : null;

                return (
                  <div key={product.module_code} className="gx-card p-5 flex flex-col group hover:border-[#FF1F23]/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                        product.os_environment === "MAXimo\u00B2"
                          ? "bg-[#00AEEF]/10 text-[#00AEEF]"
                          : "bg-[#E6007A]/10 text-[#E6007A]"
                      }`}>
                        {product.os_environment}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {dosingInfo && (
                          <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: `${dosingInfo.color}10`, color: dosingInfo.color }}>
                            <Clock className="w-2.5 h-2.5 inline mr-0.5" />{dosingInfo.label}
                          </span>
                        )}
                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                          product.evidence_tier === 1
                            ? "bg-[#00E676]/10 text-[#00E676]"
                            : "bg-[#009BFF]/10 text-[#009BFF]"
                        }`}>
                          TIER {product.evidence_tier}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1 flex-1">{product.product_name}</h3>
                    <p className="text-xs text-[#6B7A90] mb-1">{CATEGORY_LABELS[product.category_prefix] || product.category_prefix}</p>
                    <p className="text-xs text-[#6B7A90]/50 font-mono mb-3">{product.module_code}</p>

                    {product.front_label_text && (
                      <p className="text-xs text-[#6B7A90] mb-3 line-clamp-2">{product.front_label_text}</p>
                    )}

                    {product.supliful_price && (
                      <div className="mb-3">
                        <span className="text-lg font-bold text-white">${product.supliful_price.toFixed(2)}</span>
                        <span className="text-xs text-[#6B7A90] ml-1">/module</span>
                      </div>
                    )}

                    {/* Shopify checkout integration */}
                    {productUrl ? (
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={productUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gx-btn-outline flex-1 justify-center flex items-center gap-2 text-xs"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                        {cartUrl ? (
                          <a
                            href={cartUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gx-btn-primary flex-1 justify-center flex items-center gap-2 text-xs"
                          >
                            <ShoppingCart className="w-3 h-3" /> Buy
                          </a>
                        ) : (
                          <a
                            href={productUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gx-btn-primary flex-1 justify-center flex items-center gap-2 text-xs"
                          >
                            <ShoppingCart className="w-3 h-3" /> Buy
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <Link
                          to="/assessment"
                          className="gx-btn-outline w-full justify-center flex items-center gap-2 text-xs"
                        >
                          Get Protocol <ArrowRight className="w-3 h-3" />
                        </Link>
                        <p className="text-[10px] text-[#6B7A90]/40 text-center mt-2 font-mono">Available through protocol only</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Protocol CTA */}
      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Your Protocol is Not a Shopping Cart
          </h2>
          <p className="text-sm text-[#6B7A90] max-w-xl mx-auto mb-3">
            Individual modules are available, but GenoMAX&#178; is designed as a complete Biological Operating System. Upload your blood work and let the Bloodwork Engine determine your protocol.
          </p>
          <p className="text-xs text-[#6B7A90]/60 max-w-lg mx-auto mb-6">
            All modules are manufactured and fulfilled by Supliful under FDA cGMP standards with third-party testing for purity and potency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Initialize Protocol <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="gx-btn-outline inline-flex items-center gap-2">
              View Subscription Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
