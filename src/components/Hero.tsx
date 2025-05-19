
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-offWhite via-white to-portfolio-lightGray px-4">
      <div className="text-center max-w-3xl animate-fade-in-up">
        <div className="inline-block px-4 py-1 bg-portfolio-blue/10 rounded-full text-portfolio-darkBlue mb-6">
          Electronics & Communication Engineer
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Turning Ideas into <span className="text-portfolio-blue">Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I specialize in AI, IoT, and software development, creating innovative solutions for complex problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToAbout} 
            className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-8 py-6 text-lg"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-portfolio-lightGray text-portfolio-darkBlue px-8 py-6 text-lg border-portfolio-blue"
          >
            View My Work
          </Button>
        </div>
        <div className="mt-24 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-500 hover:text-portfolio-blue transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
