import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Maximo from "./pages/Maximo";
import Maxima from "./pages/Maxima";
import MAXync from "./pages/MAXync";
import Pricing from "./pages/Pricing";
import Compare from "./pages/Compare";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Assessment from "./pages/Assessment";
import Organizations from "./pages/Organizations";
import ReferralProgram from "./pages/ReferralProgram";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import OSDashboard from "./pages/OSDashboard";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070A]">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/maximo" element={<Maximo />} />
            <Route path="/maxima" element={<Maxima />} />
            <Route path="/maxync" element={<MAXync />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/referral-program" element={<ReferralProgram />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/results" element={<Results />} />
            <Route path="/dashboard" element={<OSDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
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
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
