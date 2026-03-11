import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "@/components/layout/Layout";

// Public pages
import Index from "./pages/Index";
import Sales from "./pages/Sales";
import EastmanInstruments from "./pages/sales/EastmanInstruments";
import EastmanViolinDetail from "./pages/sales/EastmanViolinDetail";
import InstrumentDetail from "./pages/sales/InstrumentDetail";
import InstrumentInquiry from "./pages/sales/InstrumentInquiry";
import Rentals from "./pages/Rentals";
import Service from "./pages/Service";
import Teaching from "./pages/Teaching";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import RentalForm from "./pages/RentalForm";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminEditProduct from "./pages/admin/AdminEditProduct";

const queryClient = new QueryClient();

// Wraps all public routes in the site header/footer Layout
const PublicLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ── Admin routes (no public header/footer) ── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add" element={<AdminAddProduct />} />
            <Route path="products/:id" element={<AdminEditProduct />} />
          </Route>

          {/* ── Public routes (wrapped in site Layout) ── */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/violins/eastman" element={<EastmanInstruments />} />
            <Route path="/sales/violins/eastman/:modelId" element={<EastmanViolinDetail />} />

            {/* Supabase-backed instrument detail pages */}
            <Route path="/sales/violins/:slug" element={<InstrumentDetail />} />
            <Route path="/sales/violas/:slug" element={<InstrumentDetail />} />
            <Route path="/sales/cellos/:slug" element={<InstrumentDetail />} />

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
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
