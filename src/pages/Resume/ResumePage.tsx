import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  ExternalLink,
  FileText,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Code2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Breadcrumb } from '../../components/layout/Breadcrumb';
import { Button } from '../../components/common/Button';
import { AnimatedSection } from '../../components/common/AnimatedSection';

export const ResumePage: React.FC = () => {
  const [hasPdfError, setHasPdfError] = useState(false);
  const { resume } = portfolioData;

  useEffect(() => {
    document.title = `Resume & Credentials — ${portfolioData.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 bg-richBlack text-white">
      {/* Header & Meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 border-b border-[#303030]">
        <Breadcrumb items={[{ label: 'Resume & Credentials' }]} />

        <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-charcoal border border-[#303030] text-[#FF6B27]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
              Official Curriculum Vitae
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-pureWhite tracking-tight">
              Verified Professional Resume
            </h1>

            <p className="font-mono text-sm sm:text-base text-[#737373]">
              Candidate: {portfolioData.name} • {portfolioData.designation} ({portfolioData.experienceYears})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={resume.path}
              download={resume.filename}
              variant="primary"
              size="md"
              icon={<Download className="w-4 h-4" />}
            >
              Download PDF ({resume.filename})
            </Button>

            <Button
              href={resume.path}
              target="_blank"
              variant="secondary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Open in Tab
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Quick Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-charcoal p-6 rounded-xl border border-[#303030] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B27]">
              <Briefcase className="w-4 h-4" />
              <span>EXPERIENCE</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {portfolioData.experienceYears} Full Stack
            </h3>
            <p className="text-xs text-[#737373]">
              Akrivia HCM, Inncircles Tech, Motivity Labs
            </p>
          </div>

          <div className="bg-charcoal p-6 rounded-xl border border-[#303030] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B27]">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              B.Tech in CSE (8.6 CGPA)
            </h3>
            <p className="text-xs text-[#737373]">
              Raghu Engineering College (2023)
            </p>
          </div>

          <div className="bg-charcoal p-6 rounded-xl border border-[#303030] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B27]">
              <Code2 className="w-4 h-4" />
              <span>SPECIALIZATIONS</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              Microservices, RAG & AWS
            </h3>
            <p className="text-xs text-[#737373]">
              Kafka, Serverless, PostgreSQL, pgvector
            </p>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <AnimatedSection>
          <div className="bg-charcoal rounded-2xl border border-[#303030] overflow-hidden shadow-2xl">
            {/* Top Toolbar */}
            <div className="px-6 py-4 bg-[#111111] border-b border-[#303030] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#FF6B27]" />
                <div>
                  <span className="font-mono text-xs text-white font-medium block">
                    {resume.filename}
                  </span>
                  <span className="font-mono text-[10px] text-[#737373]">
                    Path: {resume.path}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resume.path}
                  download={resume.filename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-[#303030] hover:border-[#FF6B27] text-xs font-mono text-[#E5E5E5] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF6B27]" />
                  <span>Save Copy</span>
                </a>
              </div>
            </div>

            {/* Viewer Stage */}
            <div className="w-full h-[750px] lg:h-[900px] bg-richBlack flex items-center justify-center">
              {!hasPdfError ? (
                <object
                  data={`${resume.path}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                  onError={() => setHasPdfError(true)}
                >
                  <div className="p-8 text-center max-w-md">
                    <FileText className="w-12 h-12 text-[#FF6B27] mx-auto mb-4" />
                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      View Full Resume
                    </h4>
                    <p className="text-sm text-[#737373] mb-6">
                      Your browser does not support embedded PDF objects. Click below to view or download.
                    </p>
                    <Button
                      href={resume.path}
                      download={resume.filename}
                      variant="primary"
                      size="md"
                      icon={<Download className="w-4 h-4" />}
                    >
                      Download Resume
                    </Button>
                  </div>
                </object>
              ) : (
                <div className="p-8 text-center max-w-md">
                  <AlertCircle className="w-12 h-12 text-[#FF6B27] mx-auto mb-4" />
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    Resume Document Path Configured
                  </h4>
                  <p className="text-sm text-[#737373] mb-6">
                    Place your official resume at <code className="text-[#FF6B27] font-mono text-xs">{resume.path}</code> to preview.
                  </p>
                  <Button
                    href={resume.path}
                    download={resume.filename}
                    variant="primary"
                    size="md"
                    icon={<Download className="w-4 h-4" />}
                  >
                    Download Resume
                  </Button>
                </div>
              )}
            </div>

            {/* Bottom bar */}
            <div className="px-6 py-3 bg-[#111111] border-t border-[#303030] flex items-center justify-between text-xs font-mono text-[#737373]">
              <span>Goutham Reddy • Full Stack Developer</span>
              <span className="text-[#FF6B27]">Single Config Variable in src/data/portfolio.ts</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#303030] flex items-center justify-between">
          <Link
            to="/"
            className="text-xs font-mono text-[#737373] hover:text-white transition-colors"
          >
            ← Return to Home Overview
          </Link>

          <Button to="/#contact" variant="primary" size="sm">
            Contact Candidate
          </Button>
        </div>
      </div>
    </div>
  );
};
