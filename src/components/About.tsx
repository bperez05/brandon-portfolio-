
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I am an Account Manager at Apple with a strong technical background and expertise in IT solutions,
            customer support, and web development. I hold a Full Stack Web Development Certification from
            Southern Methodist University.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            With my experience at Apple, I've developed skills in analyzing IT solutions, managing client
            accounts, and optimizing business performance. I consistently rank as a top performer, achieving
            an average semi-annual revenue of over $3.5 million.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I'm fluent in both English and Spanish, and I'm passionate about leveraging technology to solve
            complex problems and improve user experiences.
          </p>
        </div>
        <div>
          <div className="bg-portfolio-lightgray rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Personal Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-medium text-portfolio-darkgray">Name:</span>
                <span>Brandon P. Perez</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-medium text-portfolio-darkgray">Email:</span>
                <a href="mailto:brand.paul.perez@gmail.com" className="text-portfolio-blue hover:underline">
                  brand.paul.perez@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-medium text-portfolio-darkgray">Phone:</span>
                <a href="tel:214-914-8599" className="hover:text-portfolio-blue">
                  214-914-8599
                </a>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-medium text-portfolio-darkgray">Location:</span>
                <span>Dallas, TX</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-portfolio-darkgray">Languages:</span>
                <span>English, Spanish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
