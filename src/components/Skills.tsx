
import React from 'react';
import { Settings } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: "Embedded Systems", level: 90 },
    { name: "Python Programming", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Circuit Design", level: 85 },
    { name: "IoT Development", level: 90 },
    { name: "Web Development", level: 75 },
    { name: "Signal Processing", level: 80 },
    { name: "PCB Design", level: 70 },
  ];

  const tools = [
    "Arduino", "Raspberry Pi", "TensorFlow", 
    "PyTorch", "MATLAB", "Altium Designer", 
    "Git", "AWS IoT", "React", "Node.js"
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <Settings className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">Skills</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-portfolio-darkBlue font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-portfolio-lightGray" indicatorClassName="bg-portfolio-blue" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-white border border-portfolio-gray rounded-full px-4 py-2 text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-portfolio-darkBlue mb-2">Artificial Intelligence</h4>
                <p className="text-gray-700 text-sm">Deep learning, neural networks, computer vision</p>
              </div>
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-portfolio-darkBlue mb-2">IoT Development</h4>
                <p className="text-gray-700 text-sm">Sensor networks, device communication, data collection</p>
              </div>
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-portfolio-darkBlue mb-2">Embedded Systems</h4>
                <p className="text-gray-700 text-sm">Microcontroller programming, RTOS, firmware development</p>
              </div>
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-portfolio-darkBlue mb-2">Full Stack Development</h4>
                <p className="text-gray-700 text-sm">Web applications, RESTful APIs, database management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
