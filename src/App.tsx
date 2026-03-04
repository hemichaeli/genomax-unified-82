import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Maximo from "./pages/Maximo";
import Maxima from "./pages/Maxima";
import MAXync from "./pages/MAXync";
import Compare from "./pages/Compare";
import Assessment from "./pages/Assessment";
import About from "./pages/About";
import Organizations from "./pages/Organizations";
import ReferralProgram from "./pages/ReferralProgram";
import ReferralDashboard from "./pages/ReferralDashboard";
import ReferralLanding from "./pages/ReferralLanding";
import TrendDashboard from "./pages/TrendDashboard";
import Manifesto from "./pages/Manifesto";
import Learn from "./pages/Learn";
import ArticleDNA from "./pages/articles/ArticleDNA";
import ArticleInteractions from "./pages/articles/ArticleInteractions";
import ArticleBloodWork from "./pages/articles/ArticleBloodWork";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
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
              <Route path="/science" element={<Science />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/maximo" element={<Maximo />} />
              <Route path="/maxima" element={<Maxima />} />
              <Route path="/maxync" element={<MAXync />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/about" element={<About />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/referral" element={<ReferralProgram />} />
              <Route path="/dashboard/referrals" element={<ReferralDashboard />} />
              <Route path="/dashboard/trends" element={<TrendDashboard />} />
              <Route path="/ref/:code" element={<ReferralLanding />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/dna-test-supplements" element={<ArticleDNA />} />
              <Route path="/learn/nutrient-interactions" element={<ArticleInteractions />} />
              <Route path="/learn/blood-work-biology" element={<ArticleBloodWork />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
