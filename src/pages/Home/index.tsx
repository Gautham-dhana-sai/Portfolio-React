import React from 'react';
import { SEO } from '../../components/common/SEO';
import { Hero } from '../../components/sections/Hero';
import { HighlightsSection } from '../../components/sections/HighlightsSection';
import { AboutOverviewSection } from '../../components/sections/AboutOverviewSection';
import { ExperienceOverviewSection } from '../../components/sections/ExperienceOverviewSection';
import { ProjectsOverviewSection } from '../../components/sections/ProjectsOverviewSection';
import { SkillsOverviewSection } from '../../components/sections/SkillsOverviewSection';
import { EducationOverviewSection } from '../../components/sections/EducationOverviewSection';
import { ContactOverviewSection } from '../../components/sections/ContactOverviewSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Full Stack Developer portfolio of Pandiri Goutham Dhana Sai Reddy - 4 years experience building scalable web applications, microservices, and system integrations."
      />
      <Hero />
      <HighlightsSection />
      <AboutOverviewSection />
      <ExperienceOverviewSection />
      <ProjectsOverviewSection />
      <SkillsOverviewSection />
      <EducationOverviewSection />
      <ContactOverviewSection />
    </>
  );
};
