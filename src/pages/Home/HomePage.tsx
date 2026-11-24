import React, { useEffect } from 'react';
import { HeroSection } from '../../components/hero/HeroSection';
import { AboutPreview } from '../../components/about/AboutPreview';
import { ProjectPreview } from '../../components/projects/ProjectPreview';
import { ExperiencePreview } from '../../components/experience/ExperiencePreview';
import { SkillsPreview } from '../../components/skills/SkillsPreview';
import { EducationPreview } from '../../components/education/EducationPreview';
import { ResumeSection } from '../../components/resume/ResumeSection';
import { ContactSection } from '../../components/contact/ContactSection';
import { portfolioData } from '../../data/portfolio';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${portfolioData.name} — ${portfolioData.designation}`;
  }, []);

  return (
    <div className="flex flex-col">
      {/* Dark Hero Section */}
      <HeroSection />

      {/* Light Professional Overview & About Preview */}
      <AboutPreview />

      {/* Distinctive Dark Project Showcase */}
      <ProjectPreview />

      {/* Clean White Experience Preview */}
      <ExperiencePreview />

      {/* Crisp Off-White Skills Preview */}
      <SkillsPreview />

      {/* Clean White Education Section */}
      <EducationPreview />

      {/* Dark Resume Section with PDF Preview */}
      <ResumeSection />

      {/* Dark Contact & Social Presence Hub */}
      <ContactSection />
    </div>
  );
};
