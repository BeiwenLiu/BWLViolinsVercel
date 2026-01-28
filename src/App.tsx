import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Sales from "./pages/Sales";
import EastmanInstruments from "./pages/sales/EastmanInstruments";
import EastmanViolinDetail from "./pages/sales/EastmanViolinDetail";
import ViolinDetail from "./pages/sales/ViolinDetail";
import ViolaDetail from "./pages/sales/ViolaDetail";
import InstrumentInquiry from "./pages/sales/InstrumentInquiry";
import Rentals from "./pages/Rentals";
import Service from "./pages/Service";
import Teaching from "./pages/Teaching";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import RentalForm from "./pages/RentalForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/violins/eastman" element={<EastmanInstruments />} />
            <Route path="/sales/violins/eastman/:modelId" element={<EastmanViolinDetail />} />
            <Route path="/sales/violins/:modelId" element={<ViolinDetail />} />
            <Route path="/sales/violas/:modelId" element={<ViolaDetail />} />
            <Route path="/sales/inquiry" element={<InstrumentInquiry />} />
            <Route path="/sales/*" element={<Sales />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/rentals/*" element={<Rentals />} />
            <Route path="/service" element={<Service />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/rental-form" element={<RentalForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
