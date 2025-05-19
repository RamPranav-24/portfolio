
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce AI Associate",
      organization: "Salesforce",
      date: "2023",
      description: "Skills in AI fundamentals and Salesforce AI implementation"
    },
    {
      title: "Salesforce AI Specialist",
      organization: "Salesforce",
      date: "2023",
      description: "Advanced AI application development in Salesforce environment"
    },
    {
      title: "Oracle AI Foundation",
      organization: "Oracle",
      date: "2023", 
      description: "Core AI concepts and foundation for Oracle AI implementations"
    },
    {
      title: "Internet of Things",
      organization: "NPTEL",
      date: "2023",
      description: "IoT architecture, protocols, and implementation strategies"
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
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-xl text-portfolio-darkBlue">{cert.title}</h3>
                  <p className="text-gray-600">{cert.organization}</p>
                </div>
                <div className="bg-white border border-portfolio-gray rounded-full px-3 py-1 text-sm text-gray-700">
                  {cert.date}
                </div>
              </div>
              <p className="text-gray-700">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
