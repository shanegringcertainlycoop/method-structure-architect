import { Routes, Route } from "react-router-dom";
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
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import TrustDimension from "./pages/TrustDimension";
import PromptKit from "./pages/PromptKit";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
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
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/case-studies/:slug" element={<CaseStudy />} />
    <Route path="/systems-of-trust/:slug" element={<TrustDimension />} />
    <Route path="/prompt-kit" element={<PromptKit />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
