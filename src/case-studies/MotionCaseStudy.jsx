import React, { useEffect } from "react";
import "./motion-styles.css";

import MotionHeroSection from "./motion-sections/MotionHeroSection";
import SparkSection from "./motion-sections/SparkSection";
import SeizingSection from "./motion-sections/SeizingSection";
import ResearchSection from "./motion-sections/ResearchSection";
import DesignLabSection from "./motion-sections/DesignLabSection";
import BeatsSystemSection from "./motion-sections/BeatsSystemSection";
import AccessibilitySection from "./motion-sections/AccessibilitySection";
import ShippingSection from "./motion-sections/ShippingSection";
import UserFeedbackSection from "./motion-sections/UserFeedbackSection";
import ImpactSection from "./motion-sections/ImpactSection";
import ReflectionsSection from "./motion-sections/ReflectionsSection";
import MotionScrollRuler from "./components/MotionScrollRuler";

export default function MotionCaseStudy() {
  useEffect(() => {
    document.title = "Motion Guidelines — Kushagra Tripathi";
    return () => {
      document.title = "Predictable Champion";
    };
  }, []);

  return (
    <main className="motion-page">
      <MotionScrollRuler />
      <MotionHeroSection />
      <SparkSection />
      <SeizingSection />
      <ResearchSection />
      <DesignLabSection />
      <BeatsSystemSection />
      <AccessibilitySection />
      <ShippingSection />
      <ImpactSection />
      <UserFeedbackSection />
      <ReflectionsSection />
    </main>
  );
}
