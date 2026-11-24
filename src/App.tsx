import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/Home/HomePage';

// Code-split detail routes for performance optimization
const AboutPage = lazy(() =>
  import('./pages/About/AboutPage').then(module => ({ default: module.AboutPage }))
);
const ExperienceDetailPage = lazy(() =>
  import('./pages/Experience/ExperienceDetailPage').then(module => ({ default: module.ExperienceDetailPage }))
);
const ProjectCaseStudyPage = lazy(() =>
  import('./pages/Projects/ProjectCaseStudyPage').then(module => ({ default: module.ProjectCaseStudyPage }))
);
const EducationPage = lazy(() =>
  import('./pages/Education/EducationPage').then(module => ({ default: module.EducationPage }))
);
const ResumePage = lazy(() =>
  import('./pages/Resume/ResumePage').then(module => ({ default: module.ResumePage }))
);

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-richBlack">
    <div className="w-10 h-10 rounded-full border-2 border-[#303030] border-t-[#FF6B27] animate-spin mb-4" />
    <span className="font-mono text-xs text-[#737373]">Loading interface...</span>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Homepage: Minimal Overview */}
            <Route path="/" element={<HomePage />} />

            {/* Detailed About & Skills */}
            <Route path="/about" element={<AboutPage />} />

            {/* Experience Deep Dives */}
            <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
            <Route path="/experience" element={<Navigate to="/experience/akrivia" replace />} />

            {/* Projects Case Studies */}
            <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
            <Route path="/projects" element={<Navigate to="/projects/open-bot" replace />} />

            {/* Education Timeline */}
            <Route path="/education" element={<EducationPage />} />

            {/* Resume Viewer & Download */}
            <Route path="/resume" element={<ResumePage />} />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
