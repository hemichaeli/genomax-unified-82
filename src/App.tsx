import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import Home from "./pages/Home";
import Sellers from "./pages/Sellers";
import Buyers from "./pages/Buyers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Neighborhoods from "./pages/Neighborhoods";
import Community from "./pages/Community";
import Services from "./pages/Services";
import Assessment from "./pages/Assessment";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { dir, isRTL } = useLanguage();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const sidebarWidth = sidebarCollapsed ? "xl:pl-16" : "xl:pl-56";
  const sidebarWidthRTL = sidebarCollapsed ? "xl:pr-16" : "xl:pr-56";

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      <Header />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`flex-grow transition-all duration-300 ${isRTL ? sidebarWidthRTL : sidebarWidth}`}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/neighborhoods" element={<Neighborhoods />} />
            <Route path="/community" element={<Community />} />
            <Route path="/services" element={<Services />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
