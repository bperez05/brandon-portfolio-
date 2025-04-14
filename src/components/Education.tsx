
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, MapPin, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Education</h2>
      <Card className="mt-8 card-hover max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <School className="mr-2 h-5 w-5" />
            Southern Methodist University
          </CardTitle>
          <CardDescription className="flex items-center mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Dallas, TX</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <GraduationCap className="h-5 w-5 mr-2 text-portfolio-blue" />
            <span className="text-lg font-medium">Full Stack Web Development Certification</span>
          </div>
          <p className="text-gray-700">
            Comprehensive education in modern web development technologies, including HTML5, CSS3, JavaScript, 
            Node.js, React, and database systems like MySQL and MongoDB.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
