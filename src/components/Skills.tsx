
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Layout, Server, Terminal } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: ["ReactJS", "Bootstrap", "Handlebars.JS", "Express"]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Node.JS", "MySQL", "MongoDB", "Firebase"]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["GitHub", "Heroku", "Inquirer"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Technical Skills</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <category.icon className="mr-2 h-5 w-5 text-portfolio-blue" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} className="bg-white text-portfolio-darkgray border border-gray-200 hover:bg-gray-100 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Server className="mr-2 h-5 w-5 text-portfolio-blue" />
              Additional Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Languages Spoken</h4>
                <div className="flex gap-2">
                  <Badge variant="secondary">English</Badge>
                  <Badge variant="secondary">Spanish</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Professional</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Account Management</Badge>
                  <Badge variant="secondary">Technical Support</Badge>
                  <Badge variant="secondary">Customer Service</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
