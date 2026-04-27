import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "@/pages/HomePage";
import GetQuotesPage from "@/pages/GetQuotesPage";
import GetQuotesSentPage from "@/pages/GetQuotesSentPage";
import PolymersOverview from "@/pages/PolymersOverview";
import PolymerDetail from "@/pages/PolymerDetail";
import GradesOverview from "@/pages/GradesOverview";
import GradeDetail from "@/pages/GradeDetail";
import ApplicationsOverview from "@/pages/ApplicationsOverview";
import ApplicationDetail from "@/pages/ApplicationDetail";
import SuppliersOverview from "@/pages/SuppliersOverview";
import RegionDetail from "@/pages/RegionDetail";
import LearnOverview from "@/pages/LearnOverview";
import LearnTermDetail from "@/pages/LearnTermDetail";
import InsightsOverview from "@/pages/InsightsOverview";
import InsightDetail from "@/pages/InsightDetail";
import AboutPage from "@/pages/AboutPage";
import ForSuppliersPage from "@/pages/ForSuppliersPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import NotFoundPage from "@/pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-quotes" element={<GetQuotesPage />} />
        <Route path="/get-quotes/sent" element={<GetQuotesSentPage />} />
        <Route path="/polymers" element={<PolymersOverview />} />
        <Route path="/polymers/:slug" element={<PolymerDetail />} />
        <Route path="/grades" element={<GradesOverview />} />
        <Route path="/grades/:slug" element={<GradeDetail />} />
        <Route path="/applications" element={<ApplicationsOverview />} />
        <Route path="/applications/:slug" element={<ApplicationDetail />} />
        <Route path="/suppliers" element={<SuppliersOverview />} />
        <Route path="/suppliers/:slug" element={<RegionDetail />} />
        <Route path="/learn" element={<LearnOverview />} />
        <Route path="/learn/:slug" element={<LearnTermDetail />} />
        <Route path="/insights" element={<InsightsOverview />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/for-suppliers" element={<ForSuppliersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
