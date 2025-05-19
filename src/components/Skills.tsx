
import React from 'react';
import { Code } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 60 },
    { name: "HTML", level: 80 },
    { name: "SQL", level: 60 },
    { name: "Git & GitHub", level: 80 },
    { name: "Arduino", level: 70 },
    { name: "Basic AI/ML", level: 70 },
  ];

  const softSkills = [
    "Teamwork", 
    "Adaptability", 
    "Quick Learner", 
    "Multitasking"
  ];
  
  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Native" }
  ];

  const areasOfInterest = [
    {
      title: "Generative AI",
      icon: "🧠"
    },
    {
      title: "Web Designing",
      icon: "🎨"
    },
    {
      title: "AI & Machine Learning",
      icon: "⚙️"
    },
    {
      title: "Full Stack Web Development",
      icon: "💻"
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <Code className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">Skills</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-portfolio-darkBlue font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-portfolio-lightGray" />
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Languages</h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm bg-portfolio-blue/10 px-3 py-1 rounded-full text-portfolio-darkBlue">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white border border-portfolio-gray rounded-full px-4 py-2 text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Areas of Interest</h3>
          <div className="grid grid-cols-2 gap-4">
            {areasOfInterest.map((area, index) => (
              <Card key={index} className="tech-card hover:border-portfolio-blue transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="text-3xl mb-2">{area.icon}</div>
                  <h4 className="text-lg font-semibold text-portfolio-darkBlue">{area.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
