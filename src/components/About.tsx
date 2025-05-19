
import React from 'react';
import { User, School } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <User className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">About Me</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex justify-center md:justify-start mb-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-lg">
              <img 
                src="/lovable-uploads/b4f254b3-fc68-4093-a868-64477f0e03cd.png" 
                alt="Rampranav R" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm Rampranav R — an Electronics and Communication Engineering student at SNS College of Engineering. I'm passionate about technology, especially AI, IoT, and full stack development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With strong academic performance and hands-on experience in projects and internships, I'm driven to apply my skills in real-world engineering problems. I value teamwork, adaptability, and continuous learning.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="tech-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <School className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-semibold text-portfolio-darkBlue">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-800">SNS College of Engineering</p>
                  <p className="text-gray-700">Bachelor of Engineering – Electronics and Communication Engineering</p>
                  <p className="text-sm text-portfolio-blue font-medium">CGPA: 8.70 (2022–2026)</p>
                </div>
                <Separator className="my-2" />
                <div>
                  <p className="font-medium text-gray-800">Immaculate Matric Higher Secondary School</p>
                  <p className="text-sm text-gray-700">HSC: 77.8% (2021–2022)</p>
                  <p className="text-sm text-gray-700">SSLC: 95.2% (2019–2020)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="tech-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <School className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-semibold text-portfolio-darkBlue">Internship</h3>
              </div>
              <div>
                <p className="font-medium text-gray-800">Salzer Electronics Pvt. Ltd., Coimbatore</p>
                <p className="text-sm text-portfolio-blue">21 Days</p>
                <p className="text-gray-700 mt-2">
                  Gained hands-on experience in electronics manufacturing including components like rotary switches, MCBs, transformers, wire harnesses, and industrial switches.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
