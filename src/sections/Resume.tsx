import React from 'react';
import { motion } from 'framer-motion';
import {Calendar, Briefcase} from 'lucide-react';

type TimelineItem = {
  icon: React.ReactNode;
  period: string;
  title: string;
  company: string;
  description: string;
};

export const Resume: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      icon: <Briefcase size={20} />,
      title: 'Strategy & Growth Manager',
      company: 'InnovateEx',
      period: 'Jul 2025 - Feb 2026',
      description: 'My role focuses on identifying and creating new opportunities, optimizing existing processes, and leading cross-functional projects to scale impact. Passionate about turning insights into action and aligning strategy with measurable results.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Graphic Design Intern',
      company: 'InnovateEx',
      period: 'Mar 2025 - Jul 2025',
      description: 'Designed the official company logo and branding materials for offline and online events. Created brochures, posters, and social media assets that enhanced brand visibilit. Increased event engagement through strategic design and cross-platform promotional campaigns.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Freelance Graphic Designer',
      company: 'Self-employed',
      period: 'Jan 2024 - Present',
      description: 'Delivered customized visual content including logos, posters, and reels for clients across industries. Specialized in personal branding, event promotion, and digital content creation. Managed end-to-end client communication, revisions, and delivery independently.'
    },
    
    {
      icon: <Briefcase size={20} />,
      title: 'Head of Administration & Member of Board of Director',
      company: 'VRC Grands Pvt. Ltd',
      period: 'May 2024 - Oct 2024',
      description: 'Directed administrative operations and patricipated in major decision making for the future of the company while maintaining creative coordination for major events. Led the design team and developed promotional assets for events like Mirage 2024 ft. Paradox and Priyanshi Srivastava. Oversaw digital campaigns that boosted event reach and brand recognition.'
    },
    {
    icon: <Briefcase size={20} />,
      title: 'Chief Executive Officer',
      company: 'CodingBlocks LPU',
      period: 'May 2024 - Oct 2024',
      description: 'Formulated the organization’s strategic roadmap and led a multidisciplinary team. Oversaw event planning, brand development, and marketing initiatives. Elevated the clubs presence as the top-ranked student-led body through innovation and engagement.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Design & Events Lead',
      company: 'CodingBlocks LPU',
      period: 'Feb 2024 - May 2024',
      description: 'Directed visual branding and coordinated logistics for high-profile campus events. Managed a team of designers and streamlined creative workflows. Played a pivotal role in amplifying the clubs reach and visual identity.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Graphic Design Team Member',
      company: 'CodingBlocks LPU',
      period: 'Sep 2023 - Feb 2024',
      description: 'Created posters, reels, and banners for club events under mentorship. Built a strong foundation in branding, layout design, and collaborative content creation.'
    }
  ];

  return (
    <section id="resume" className="section bg-black relative">
      {/* Background Gradient and Floating Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-5 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container-custom">
        <h3 className="section-subtitle text-blue-600">My Resume</h3>
        <h2 className="section-title text-white">Experience</h2>

        <div className="mt-12 mb-12 max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6, ease: 'easeOut' }}
              >
                <div className="absolute -left-12 bg-blue-600 text-white p-2 rounded-full">
                  {item.icon}
                </div>
                <div className="flex items-center text-sm text-blue-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                <p className="text-white">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
