import React, { useEffect } from "react";
import "./kyc-styles.css";
import "./metro-styles.css";

import HeroSection from "./metro-sections/HeroSection";
import StageSection from "./metro-sections/StageSection";
import ProcessTimelineSection from "./metro-sections/ProcessTimelineSection";
import UnderstandSection from "./metro-sections/UnderstandSection";
import AffinitySection from "./metro-sections/AffinitySection";
import WorkModelsSection from "./metro-sections/WorkModelsSection";
import PersonasSection from "./metro-sections/PersonasSection";
import PositioningSection from "./metro-sections/PositioningSection";
import InformationArchitectureSection from "./metro-sections/InformationArchitectureSection";
import NavigationSection from "./metro-sections/NavigationSection";
import VisualIdentitySection from "./metro-sections/VisualIdentitySection";
import SolutionSection from "./metro-sections/SolutionSection";
import HalfUserSection from "./metro-sections/HalfUserSection";
import UsabilityTestingSection from "./metro-sections/UsabilityTestingSection";
import USPCloseSection from "./metro-sections/USPCloseSection";
import ScrollRuler from "./components/ScrollRuler";

export default function MetroPlusCaseStudy() {
  useEffect(() => {
    document.title = "Metro+ · Kushagra Tripathi";
    return () => {
      document.title = "Predictable Champion";
    };
  }, []);

  return (
    <main className="cs-page metro-page">
      <HeroSection />
      <StageSection />
      <ProcessTimelineSection />
      <UnderstandSection />
      <AffinitySection />
      <WorkModelsSection />
      <PersonasSection />
      <PositioningSection />
      <InformationArchitectureSection />
      <NavigationSection />
      <VisualIdentitySection />
      <SolutionSection />
      <HalfUserSection />
      <UsabilityTestingSection />
      <USPCloseSection />
      <ScrollRuler />
    </main>
  );
}
