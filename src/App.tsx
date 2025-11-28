import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingAIChat } from "@/components/FloatingAIChat";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Maxima from "./pages/Maxima";
import Maximo from "./pages/Maximo";
import MAXync from "./pages/MAXync";
import Onboarding from "./pages/Onboarding";
import OSDashboard from "./pages/OSDashboard";
import Science from "./pages/Science";
import About from "./pages/About";
import Organizations from "./pages/Organizations";
import Compare from "./pages/Compare";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/assessment/:variant" element={<Assessment />} />
              <Route path="/results" element={<Results />} />
              <Route path="/maxima" element={<Maxima />} />
              <Route path="/maximo" element={<Maximo />} />
          <Route path="/maxync" element={<MAXync />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<OSDashboard />} />
              <Route path="/science" element={<Science />} />
              <Route path="/about" element={<About />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingAIChat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
