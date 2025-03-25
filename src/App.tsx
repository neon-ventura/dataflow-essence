
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvantPro from "./pages/competitors/AvantPro";
import Nubimetrics from "./pages/competitors/Nubimetrics";
import MercadoTurbo from "./pages/competitors/MercadoTurbo";
import RealTrends from "./pages/competitors/RealTrends";
import ShoppingPrecos from "./pages/competitors/ShoppingPrecos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anye-vs-avant-pro" element={<AvantPro />} />
          <Route path="/anye-vs-nubimetrics" element={<Nubimetrics />} />
          <Route path="/anye-vs-mercado-turbo" element={<MercadoTurbo />} />
          <Route path="/anye-vs-real-trends" element={<RealTrends />} />
          <Route path="/anye-vs-shopping-de-precos" element={<ShoppingPrecos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
