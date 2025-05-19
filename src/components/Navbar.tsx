
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Certifications", href: "#certifications" },
    { title: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-portfolio-darkBlue font-poppins">Rampranav R</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className="font-medium text-gray-700 hover:text-portfolio-blue transition-colors"
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-portfolio-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.href)}
                  className="font-medium text-gray-700 hover:text-portfolio-blue transition-colors"
                >
                  {item.title}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white w-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
