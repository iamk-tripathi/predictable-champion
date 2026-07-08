import React, { useEffect } from "react";
import "./kyc-styles.css";

import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import ResultsSection from "./sections/ResultsSection";
import EmpathySection from "./sections/EmpathySection";
import ResearchSection from "./sections/ResearchSection";
import InsightSection from "./sections/InsightSection";
import PrototypeSection from "./sections/PrototypeSection";
import TestimonialSection from "./sections/TestimonialSection";
import ExecutiveQuotesSection from "./sections/ExecutiveQuotesSection";
import CloseSection from "./sections/CloseSection";
import EpilogueSection from "./sections/EpilogueSection";
import ScrollRuler from "./components/ScrollRuler";

export default function KYCCaseStudy() {
  useEffect(() => {
    document.title = "KYC Redesign — Kushagra Tripathi";
    return () => {
      document.title = "Predictable Champion";
    };
  }, []);

  return (
    <main className="cs-page">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <EmpathySection />
      <ResearchSection />
      <InsightSection />
      <PrototypeSection />
      <TestimonialSection />
      <ExecutiveQuotesSection />
      <CloseSection />
      <EpilogueSection />
      <ScrollRuler />
    </main>
  );
}
