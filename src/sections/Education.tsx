import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, GraduationCap } from 'lucide-react';

type TimelineItem = {
  icon: React.ReactNode;
  period: string;
  title: string;
  company: string;
  description: string;
};

export const Education: React.FC = () => {
  const timeline: TimelineItem[] = [
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
        <h2 className="section-title text-white">Education</h2>

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
            href="documents/SamanvayGupta.pdf" 
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
