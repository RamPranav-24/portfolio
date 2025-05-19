
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a backend service
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-container">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-portfolio-blue/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-portfolio-blue" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold ml-3">Contact</h2>
      </div>
      
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="tech-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-portfolio-blue/10 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-portfolio-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">Email</h3>
            <p className="text-gray-700">contact@example.com</p>
          </CardContent>
        </Card>
        
        <Card className="tech-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-portfolio-blue/10 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-portfolio-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">Phone</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </CardContent>
        </Card>
        
        <Card className="tech-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-portfolio-blue/10 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-portfolio-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">Location</h3>
            <p className="text-gray-700">San Francisco, California</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-12 max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-portfolio-darkBlue">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-gray-700">Subject</label>
              <Input id="subject" placeholder="How can I help you?" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your message here..." rows={5} required />
            </div>
            <Button type="submit" className="bg-portfolio-blue hover:bg-portfolio-darkBlue w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
