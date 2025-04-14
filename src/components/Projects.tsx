
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: "Web Development Portfolio",
    description: "A responsive portfolio website showcasing my web development projects and skills using modern technologies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: "/placeholder.svg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, and checkout functionality.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    image: "/placeholder.svg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management App",
    description: "A task management application allowing users to create, organize, and track their daily tasks and projects.",
    technologies: ["JavaScript", "Firebase", "HTML5", "CSS3"],
    image: "/placeholder.svg",
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Projects</h2>
      <p className="mt-4 mb-8 text-lg text-gray-700 max-w-3xl">
        Here are some of the projects I've worked on, showcasing my skills in web development and programming.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full card-hover overflow-hidden">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-gray-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.demoLink && (
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              )}
              {project.codeLink && (
                <Button size="sm" variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
