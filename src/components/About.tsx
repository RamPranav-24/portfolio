
import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm an Electronics & Communication Engineering student passionate about exploring the intersection of hardware and software. With a strong foundation in both theoretical knowledge and practical application, I dive deep into artificial intelligence, Internet of Things (IoT), and software development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey in tech has allowed me to work on diverse projects, from designing embedded systems to developing machine learning models. I enjoy solving complex problems and creating innovative solutions that make a positive impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding or soldering, you'll find me exploring new technologies, participating in hackathons, or contributing to open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="tech-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-darkBlue">Education</h3>
              <p className="text-gray-700">B.Tech in Electronics & Communication Engineering</p>
              <p className="text-sm text-gray-500 mt-2">2020 - 2024</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-darkBlue">Experience</h3>
              <p className="text-gray-700">2+ years of hands-on experience with IoT and embedded systems</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-darkBlue">Research Interests</h3>
              <ul className="list-disc ml-5 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Artificial Intelligence</li>
                <li>Embedded Systems</li>
                <li>IoT Applications</li>
                <li>Signal Processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
