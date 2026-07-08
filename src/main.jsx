import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./styles.css";

const KYCCaseStudy = lazy(() => import("./case-studies/KYCCaseStudy"));
const MotionCaseStudy = lazy(() => import("./case-studies/MotionCaseStudy"));
const MetroPlusCaseStudy = lazy(() => import("./case-studies/MetroPlusCaseStudy"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/kyc" element={<KYCCaseStudy />} />
        <Route path="/case-study/motion-guidelines" element={<MotionCaseStudy />} />
        <Route path="/case-study/metro-plus" element={<MetroPlusCaseStudy />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
