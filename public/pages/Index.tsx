
import React from 'react';
import Header from '../../src/components/Header';
import Hero from '../../src/components/Hero';
import About from '../../src/components/About';
import Experience from '../../src/components/Experience';
import Education from '../../src/components/Education';
import Skills from '../../src/components/Skills';
import Projects from '../../src/components/Projects';
import Contact from '../../src/components/Contact';
import Footer from '../../src/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Index;
