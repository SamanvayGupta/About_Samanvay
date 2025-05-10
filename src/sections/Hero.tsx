import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 scale-y-[-1] bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"></div>
        <div
          className="absolute bottom-5 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container-custom relative z-10 w-full px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="inline-block text-white">Hi, I'm </span>
              <span className="inline-block text-blue-600">Samanvay Gupta</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              I'm a designer passionate about streetwear, youth culture, and visual storytelling.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
              Designs that speak louder than trends.
            </h2>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-3xl transform transition-transform hover:scale-[1.03] shadow-[0_0_30px_#5271FF]">
              <img
                src="/images/me.png"
                alt="Samanvay Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors shadow-[0_0_30px_#5271FF]">
            <ChevronDown size={52} />
          </a>
        </div>
      </div>
    </section>
  );
};
