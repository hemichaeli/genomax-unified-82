import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import Home from "./pages/Home";
import Sellers from "./pages/Sellers";
import Buyers from "./pages/Buyers";
import Services from "./pages/Services";
import Neighborhoods from "./pages/Neighborhoods";
import Community from "./pages/Community";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Assessment from "./pages/Assessment";
import ReferralProgram from "./pages/ReferralProgram";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className={`flex-grow ${isRTL ? "xl:mr-56" : "xl:ml-56"}`}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sellers" element={<Sellers />} />
              <Route path="/buyers" element={<Buyers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/neighborhoods" element={<Neighborhoods />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/referral" element={<ReferralProgram />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
