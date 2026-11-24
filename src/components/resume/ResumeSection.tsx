import React, { useState } from 'react';
import { Download, FileText, ExternalLink, AlertCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../common/Button';

export const ResumeSection: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);
  const { resume } = portfolioData;

  return (
    <section id="resume" className="py-24 lg:py-32 bg-richBlack text-white border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Curriculum Vitae"
              title="Verified Professional Resume"
              highlightedWord="Resume"
              subtitle="Review verified credentials, enterprise work milestones, and engineering competencies."
              theme="dark"
              className="mb-0"
            />

            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <Button
                href={resume.path}
                download={resume.filename}
                variant="primary"
                size="md"
                icon={<Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>

              <Button
                href={resume.path}
                target="_blank"
                variant="secondary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Open in New Tab
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* PDF Preview Container */}
        <AnimatedSection delay={0.15}>
          <div className="bg-charcoal rounded-2xl border border-[#303030] overflow-hidden shadow-2xl">
            
            {/* Top Bar */}
            <div className="px-6 py-4 bg-[#111111] border-b border-[#303030] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF6B27]" />
                <span className="font-mono text-xs text-[#E5E5E5] font-medium">
                  {resume.filename}
                </span>
                <span className="text-xs text-[#737373] hidden sm:inline">
                  • Engineering Resume
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#FF6B27] px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#303030]">
                  PDF Verified
                </span>
              </div>
            </div>

            {/* Embedded Viewer */}
            <div className="relative w-full h-[600px] lg:h-[750px] bg-richBlack flex items-center justify-center">
              {!iframeError ? (
                <object
                  data={`${resume.path}#toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                  onError={() => setIframeError(true)}
                >
                  <div className="p-8 text-center max-w-md">
                    <FileText className="w-12 h-12 text-[#FF6B27] mx-auto mb-4" />
                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      Direct PDF Preview
                    </h4>
                    <p className="text-sm text-[#737373] mb-6">
                      Click below to view or download the complete resume document.
                    </p>
                    <Button
                      href={resume.path}
                      variant="primary"
                      size="md"
                      download={resume.filename}
                      icon={<Download className="w-4 h-4" />}
                    >
                      Download Resume ({resume.filename})
                    </Button>
                  </div>
                </object>
              ) : (
                <div className="p-8 text-center max-w-md">
                  <AlertCircle className="w-12 h-12 text-[#FF6B27] mx-auto mb-4" />
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    Resume Document Available
                  </h4>
                  <p className="text-sm text-[#737373] mb-6">
                    Place your updated PDF resume at <code className="text-[#FF6B27] font-mono text-xs">{resume.path}</code> to preview directly.
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

            {/* Footer Status Bar */}
            <div className="px-6 py-3 bg-[#111111] border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#737373]">
              <span>Candidate: {portfolioData.name}</span>
              <span className="text-[#FF6B27]">Configurable path: {resume.path}</span>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
