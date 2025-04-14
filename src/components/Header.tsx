
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Briefcase, User, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="font-bold text-xl text-portfolio-darkblue">
              Brandon P. Perez
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="flex items-center text-sm font-medium text-gray-700 hover:text-portfolio-blue">
              <User className="mr-1 h-4 w-4" />
              About
            </a>
            <a href="#experience" className="flex items-center text-sm font-medium text-gray-700 hover:text-portfolio-blue">
              <Briefcase className="mr-1 h-4 w-4" />
              Experience
            </a>
            <a href="#skills" className="flex items-center text-sm font-medium text-gray-700 hover:text-portfolio-blue">
              <Code className="mr-1 h-4 w-4" />
              Skills
            </a>
            <a href="#contact" className="flex items-center text-sm font-medium text-gray-700 hover:text-portfolio-blue">
              <Mail className="mr-1 h-4 w-4" />
              Contact
            </a>
          </nav>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <Button size="sm" className="ml-8 whitespace-nowrap">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
