
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
