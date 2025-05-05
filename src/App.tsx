
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExchangeRateProvider } from "./contexts/ExchangeRateContext";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ExchangeRatesPage from "./pages/ExchangeRatesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ExchangeRateProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="exchange-rates" element={<ExchangeRatesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="error" element={<ErrorPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ExchangeRateProvider>
  </QueryClientProvider>
);

export default App;
