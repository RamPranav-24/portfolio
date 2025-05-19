
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "TensorFlow Developer Specialization",
      organization: "DeepLearning.AI",
      date: "June 2023",
      description: "Advanced machine learning and neural network implementation using TensorFlow",
    },
    {
      title: "IoT Fundamentals",
      organization: "Cisco Networking Academy",
      date: "March 2023",
      description: "Comprehensive course covering IoT architecture, security, and implementation",
    },
    {
      title: "Embedded Systems Professional Certification",
      organization: "IEEE",
      date: "November 2022", 
      description: "Advanced embedded systems design, real-time operating systems, and optimization",
    },
    {
      title: "Full Stack Web Development",
      organization: "freeCodeCamp",
      date: "August 2022",
      description: "Developed responsive web applications using modern front-end and back-end technologies",
    },
  ];

  return (
    <section id="certifications" className="section-container bg-portfolio-lightGray">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <Award className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">Certifications</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-xl text-portfolio-darkBlue">{cert.title}</h3>
                  <p className="text-gray-600">{cert.organization}</p>
                </div>
                <div className="bg-white border border-portfolio-gray rounded-full px-3 py-1 text-sm text-gray-700">
                  {cert.date}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
