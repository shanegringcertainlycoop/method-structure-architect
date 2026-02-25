import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SystemsOfTrust from "./pages/SystemsOfTrust";
import MethodCapture from "./pages/MethodCapture";
import Glossary from "./pages/Glossary";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import StrategySprint from "./pages/StrategySprint";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/systems-of-trust" element={<SystemsOfTrust />} />
          <Route path="/method-capture" element={<MethodCapture />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/strategy-sprint" element={<StrategySprint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
