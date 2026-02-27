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
import TrustMechanismModules from "./pages/TrustMechanismModules";
import FractionalCredentialOperations from "./pages/FractionalCredentialOperations";
import TrustArchitectureReview from "./pages/TrustArchitectureReview";
import TrustReviewWorkbook from "./pages/TrustReviewWorkbook";
import BenchmarkAudit from "./pages/BenchmarkAudit";
import CurriculumAssessmentDesign from "./pages/CurriculumAssessmentDesign";
import BrandInfrastructure from "./pages/BrandInfrastructure";
import PilotCertification from "./pages/PilotCertification";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/systems-of-trust" element={<SystemsOfTrust />} />
          <Route path="/method-capture" element={<MethodCapture />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/strategy-sprint" element={<StrategySprint />} />
          <Route path="/trust-mechanism-modules" element={<TrustMechanismModules />} />
          <Route path="/fractional-credential-operations" element={<FractionalCredentialOperations />} />
          <Route path="/trust-architecture-review" element={<TrustArchitectureReview />} />
          <Route path="/trust-review-workbook" element={<TrustReviewWorkbook />} />
          <Route path="/benchmark-audit" element={<BenchmarkAudit />} />
          <Route path="/curriculum-assessment-design" element={<CurriculumAssessmentDesign />} />
          <Route path="/brand-infrastructure" element={<BrandInfrastructure />} />
          <Route path="/120-day-pilot" element={<PilotCertification />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
