import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { ExperiencePage } from '../pages/Experience';
import { CompanyDetailPage } from '../pages/Experience/CompanyDetail';
import { ProjectsPage } from '../pages/Projects';
import { ProjectDetailPage } from '../pages/Projects/ProjectDetail';
import { SkillsPage } from '../pages/Skills';
import { EducationPage } from '../pages/Education';
import { ResumePage } from '../pages/Resume';
import { ContactPage } from '../pages/Contact';

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes location={location}>
          {/* Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Experience Overview & Details */}
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experience/:slug" element={<CompanyDetailPage />} />

          {/* Projects Overview & Details */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />

          {/* Skills */}
          <Route path="/skills" element={<SkillsPage />} />

          {/* Education */}
          <Route path="/education" element={<EducationPage />} />

          {/* Resume */}
          <Route path="/resume" element={<ResumePage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
