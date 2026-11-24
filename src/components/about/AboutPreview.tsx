import React from 'react';
import { ArrowRight, Layers, Cpu, Database } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Button } from '../common/Button';
import { AnimatedSection } from '../common/AnimatedSection';

export const AboutPreview: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F5F5] text-[#0A0A0A] border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Professional Overview Statistics */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-16 border-b border-[#E5E5E5]">
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-[#E5E5E5] hover:border-[#FF6B27] transition-all duration-200 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading font-black text-4xl sm:text-5xl text-[#0A0A0A] group-hover:text-[#FF6B27] transition-colors tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#171717] mt-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-[#737373] mt-3 font-mono leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* About Preview Text & Deep Dive CTA */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-white border border-[#E5E5E5] text-[#FF6B27]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B27]" />
                About Me
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight mt-3">
                Full-stack precision with an engineering-first mindset.
              </h2>
              <p className="text-lg text-[#303030] leading-relaxed mt-4 font-normal">
                {portfolioData.aboutPreview}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="pt-2">
                <Button
                  to="/about"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Journey
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-4">
            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-sm text-[#0A0A0A] uppercase tracking-wider font-mono text-xs">
                  Engineering Principles
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#FF6B27] shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-sm text-[#0A0A0A] block">Distributed Systems</span>
                      <span className="text-xs text-[#737373]">Kafka streaming & AWS serverless event buses</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#FF6B27] shrink-0 mt-0.5">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-sm text-[#0A0A0A] block">High-Scale Data</span>
                      <span className="text-xs text-[#737373]">Optimized bulk ingestion (70k records/min)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#FF6B27] shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-sm text-[#0A0A0A] block">AI & Vector Embeddings</span>
                      <span className="text-xs text-[#737373]">pgvector, RAG architectures & token telemetry</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </section>
  );
};
