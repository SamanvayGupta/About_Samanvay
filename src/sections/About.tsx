import React from 'react';
import {
  Palette,
  Code,
  PenTool,
  TrendingUp,
  Monitor,
  Award
} from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { icon: <Palette size={24} />, name: 'Canva', description: 'Expert in creating dynamic visual content' },
    { icon: <PenTool size={24} />, name: 'Photoshop', description: 'Advanced image manipulation and design' },
    { icon: <TrendingUp size={24} />, name: 'Branding', description: 'Creating cohesive brand identities' },
    { icon: <Monitor size={24} />, name: 'Social Media', description: 'Engaging content for digital platforms' },
    { icon: <Code size={24} />, name: 'Tech', description: 'B.Tech CSE student with technical knowledge' },
    { icon: <Award size={24} />, name: 'Leadership', description: 'Graphic Design Head at CodingBlocks LPU' },
  ];

  return (
    <section id="about" className="section bg-black relative py-20">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"></div>
        <div
          className="absolute bottom-10 left-5 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <h3 className="section-subtitle text-blue-600 text-center">About Me</h3>
        <h2 className="section-title text-white text-center">Who Am I?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/2.png"
              alt="Samanvay working"
              className="rounded-lg w-4/5 sm:w-3/4 md:w-4/5 object-cover shadow-[0_0_30px_#5271FF]"
            />
          </div>

          {/* Text and Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">My Journey</h3>
            <p className="text-white mb-6 leading-relaxed">
              I'm a B.Tech CSE student with a passion for graphic design. Currently serving as the Graphic Design Head at CodingBlocks LPU, I've honed my skills through both academic pursuits and practical experience as a freelance designer.
            </p>
            <p className="text-white mb-8 leading-relaxed">
              My design philosophy centers around creating visuals that resonate with youth culture and contemporary trends while maintaining a timeless appeal. I believe in the power of visual storytelling to connect brands with their audiences in meaningful ways.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-blue-600">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1 duration-200 ease-in-out hover:scale-125">{skill.icon}</div>
                  <div>
                    <h4 className="font-bold text-blue-600 hover:scale-[1.05] transition-transform duration-200">{skill.name}</h4>
                    <p className="text-sm text-white">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#portfolio" className="btn btn-primary">
              Check Out My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
