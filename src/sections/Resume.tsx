import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

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
      title: 'Graphic Design Intern',
      company: 'InnovateEx',
      period: 'Mar 2024 - Present',
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
      title: 'Head of Administration',
      company: 'VRC Grands Pvt. Ltd',
      period: 'Aug 2024 - Jan 2025',
      description: 'Directed administrative operations and creative coordination for major events. Led the design team and developed promotional assets for events like Mirage 2024 ft. Paradox and Priyanshi Srivastava. Oversaw digital campaigns that boosted event reach and brand recognition.'
    },
    {
    icon: <Briefcase size={20} />,
      title: 'Chief Executive Officer',
      company: 'CodingBlocks LPU',
      period: 'Aug 2024 - Jan 2025',
      description: 'Formulated the organization’s strategic roadmap and led a multidisciplinary team. Oversaw event planning, brand development, and marketing initiatives. Elevated the clubs presence as the top-ranked student-led body through innovation and engagement.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Design & Events Lead',
      company: 'CodingBlocks LPU',
      period: 'Feb 2024 - Aug 2024',
      description: 'Directed visual branding and coordinated logistics for high-profile campus events. Managed a team of designers and streamlined creative workflows. Played a pivotal role in amplifying the clubs reach and visual identity.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Graphic Design Team Member',
      company: 'CodingBlocks LPU',
      period: 'Sep 2023 - Feb 2024',
      description: 'Created posters, reels, and banners for club events under mentorship. Built a strong foundation in branding, layout design, and collaborative content creation.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'B.Tech in Computer Science',
      company: 'Lovely Professional University',
      period: '2023 - Present',
      description: 'Pursuing core subjects in data structures, machine learning, and software development. Actively exploring creative coding, UI/UX design, and multimedia project development alongside academics.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Senior Secondary Education (Class 12)',
      company: 'BSF Sr. Sec. School Jammu',
      period: '2022 - 2023',
      description: 'Stream: Science (Physics, Chemistry, Mathematics, Computer Science). Ranked #1 coder in school, with a strong foundation in Python and algorithmic thinking. Served as the House Captain of Blue House, leading teams in inter-house competitions. Won multiple school-level competitions including dance, board decoration, and house events, showcasing both creativity and leadership.'
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
        <h2 className="section-title text-white">Education & Experience</h2>

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

        <div className="flex flex-col items-center z-10 relative">
          <p className="text-white mb-6 text-center max-w-2xl">
            Want to know more about my background and skills? 
            Download my full resume to see my complete experience, education, and skill set.
          </p>
          <a 
            href="documents/Resume_SamanvayGupta.pdf" 
            download 
            className="btn btn-primary flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download Full Resume</span>
          </a>
          <p className="text-sm text-white mt-4">PDF format, 100kb</p>
        </div>
      </div>
    </section>
  );
};
