
import React from 'react';
import { Folder } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "Developed an IoT-based smart home system with voice control, automated lighting, and energy consumption monitoring using Arduino and Raspberry Pi.",
      tech: ["IoT", "Arduino", "Raspberry Pi", "MQTT", "Python"],
      link: "#"
    },
    {
      title: "AI-Powered Health Diagnosis",
      description: "Created a machine learning model that analyzes medical data to predict health issues with 92% accuracy, using TensorFlow and scikit-learn.",
      tech: ["Python", "TensorFlow", "scikit-learn", "Flask", "React"],
      link: "#"
    },
    {
      title: "Gesture-Controlled Robot",
      description: "Built a robot that responds to hand gestures using computer vision algorithms and embedded systems for precise movement control.",
      tech: ["OpenCV", "Python", "Arduino", "C++", "Embedded Systems"],
      link: "#"
    },
    {
      title: "Environmental Monitoring Network",
      description: "Designed a network of sensors for monitoring air quality, temperature, and humidity across multiple locations with real-time data visualization.",
      tech: ["IoT", "MQTT", "LoRaWAN", "ESP32", "Dashboard"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="section-container bg-portfolio-lightGray">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <Folder className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">Projects</h2>
      </div>
      
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Here are some of my recent projects that showcase my skills in AI, IoT, and software development.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-portfolio-blue/5 border-b">
              <CardTitle className="text-xl text-portfolio-darkBlue">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 pb-6">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-portfolio-blue/10 text-portfolio-darkBlue border-portfolio-blue/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              <a 
                href={project.link}
                className="text-portfolio-blue hover:text-portfolio-darkBlue hover:underline font-medium transition-colors"
              >
                View Project →
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
