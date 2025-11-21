import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        heading: ['Inter Tight', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
          glow: "hsl(var(--maxima-glow))",
          foreground: "hsl(var(--maxima-foreground))",
        },
        maximo: {
          DEFAULT: "hsl(var(--maximo))",
          light: "hsl(var(--maximo-light))",
          glow: "hsl(var(--maximo-glow))",
          foreground: "hsl(var(--maximo-foreground))",
        },
        "os-cyan": "hsl(var(--os-cyan))",
        "os-success": "hsl(var(--os-success))",
        "os-warning": "hsl(var(--os-warning))",
        "os-error": "hsl(var(--os-error))",
        "os-info": "hsl(var(--os-info))",
        "metabolic-gold": "hsl(var(--metabolic-gold))",
        "cellular-peach": "hsl(var(--cellular-peach))",
        "hormonal-purple": "hsl(var(--hormonal-purple))",
        "system-mint": "hsl(var(--system-mint))",
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
        "fade-up-reveal": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "os-glow-pulse": {
          "0%, 100%": { 
            filter: "brightness(1)",
            boxShadow: "0 0 20px hsl(189 100% 60% / 0.3)"
          },
          "50%": { 
            filter: "brightness(1.12)",
            boxShadow: "0 0 40px hsl(189 100% 60% / 0.5)"
          },
        },
        "cyan-glow-pulse": {
          "0%, 100%": { 
            filter: "brightness(1)",
            boxShadow: "0 0 32px hsl(189 100% 60% / 0.4), 0 0 16px hsl(189 100% 60% / 0.2)"
          },
          "50%": { 
            filter: "brightness(1.12)",
            boxShadow: "0 0 48px hsl(189 100% 60% / 0.6), 0 0 24px hsl(189 100% 60% / 0.3)"
          },
        },
        "magenta-glow-pulse": {
          "0%, 100%": { 
            filter: "brightness(1)",
            boxShadow: "0 0 32px hsl(323 100% 42% / 0.4), 0 0 16px hsl(323 100% 42% / 0.2)"
          },
          "50%": { 
            filter: "brightness(1.12)",
            boxShadow: "0 0 48px hsl(323 100% 42% / 0.6), 0 0 24px hsl(323 100% 42% / 0.3)"
          },
        },
        "os-breathing": {
          "0%, 100%": { 
            opacity: "0.08",
            transform: "scale(1)",
          },
          "50%": { 
            opacity: "0.2",
            transform: "scale(1.02)",
          },
        },
        "os-ring-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "maxync-inner-ring": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "maxync-outer-ring": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
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
        "reveal-up": "reveal-up 220ms cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "reveal-scale": "reveal-scale 220ms cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "fade-in": "fade-in 220ms cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "fade-up-reveal": "fade-up-reveal 220ms cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "os-glow-pulse": "os-glow-pulse 4s ease-in-out infinite",
        "cyan-glow-pulse": "cyan-glow-pulse 4s ease-in-out infinite",
        "magenta-glow-pulse": "magenta-glow-pulse 4s ease-in-out infinite",
        "os-breathing": "os-breathing 4s ease-in-out infinite",
        "os-ring-rotate": "os-ring-rotate 20s linear infinite",
        "maxync-inner-ring": "maxync-inner-ring 12s linear infinite",
        "maxync-outer-ring": "maxync-outer-ring 18s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "parallax-slow": "parallax-slow 20s ease-out forwards",
        "streak-bounce": "streak-bounce 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
        "module-check": "module-check 200ms cubic-bezier(0.25, 0.1, 0.25, 1)",
        "supply-pulse": "supply-pulse 4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'genomax': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        'hover': '140ms',
        'press': '80ms',
        'reveal': '220ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
