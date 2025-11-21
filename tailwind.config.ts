import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        maxima: {
          DEFAULT: "hsl(var(--maxima))",
          light: "hsl(var(--maxima-light))",
          foreground: "hsl(var(--maxima-foreground))",
        },
        maximo: {
          DEFAULT: "hsl(var(--maximo))",
          light: "hsl(var(--maximo-light))",
          foreground: "hsl(var(--maximo-foreground))",
        },
        biological: {
          gold: "hsl(var(--metabolic-gold))",
          peach: "hsl(var(--cellular-peach))",
          purple: "hsl(var(--hormonal-purple))",
          mint: "hsl(var(--system-mint))",
        },
        os: {
          cyan: "hsl(var(--os-cyan))",
          success: "hsl(var(--os-success))",
          warning: "hsl(var(--os-warning))",
          error: "hsl(var(--os-error))",
          info: "hsl(var(--os-info))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-scale": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "os-glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(186 100% 64% / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(186 100% 64% / 0.4)" },
        },
        "os-breathing": {
          "0%, 100%": { 
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
        "os-ring-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "particle-float": {
          "0%, 100%": { 
            transform: "translate(0, 0)",
            opacity: "0.3"
          },
          "50%": { 
            transform: "translate(10px, -10px)",
            opacity: "0.6"
          },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "liquid-ripple": {
          "0%": { transform: "scale(0)", opacity: "0.8" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "sync-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "parallax-slow": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-15px)" },
        },
        "streak-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "module-check": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "supply-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reveal-up": "reveal-up 500ms cubic-bezier(0.4, 0, 0.2, 1) both",
        "reveal-scale": "reveal-scale 400ms cubic-bezier(0.33, 1, 0.68, 1) both",
        "fade-in": "fade-in 800ms ease-out both",
        "os-glow-pulse": "os-glow-pulse 2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite",
        "os-breathing": "os-breathing 1400ms cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite",
        "os-ring-rotate": "os-ring-rotate 30s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "particle-float": "particle-float 8s ease-in-out infinite",
        "ripple": "ripple 600ms cubic-bezier(0.33, 1, 0.68, 1)",
        "liquid-ripple": "liquid-ripple 800ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        "sync-pulse": "sync-pulse 2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite",
        "parallax-slow": "parallax-slow 20s ease-out forwards",
        "streak-bounce": "streak-bounce 160ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        "module-check": "module-check 200ms ease-out",
        "supply-pulse": "supply-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
