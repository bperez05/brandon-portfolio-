
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  company: string;
  location: string;
  title: string;
  period: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    company: "Apple",
    location: "Dallas, TX",
    title: "Account Manager",
    period: "Jul 2022 - Present",
    responsibilities: [
      "Analyzed IT solutions and software, identified issues, and reported findings, making recommendations for effective solutions",
      "Assessed clients' support needs and forecasted business performance through effective account management, pipeline building, and utilization of CRM tools",
      "Maintained a strong understanding of SMB industries, local business challenges, and trends, ensuring informed decision-making and strategic planning",
      "Consistently ranked as a top performer in the market, achieving an average semi-annual revenue of over $3.5 million",
      "Leveraged expertise in opportunity management to drive results and exceed sales targets within the Apple Business Team"
    ]
  },
  {
    company: "Apple",
    location: "Dallas, TX",
    title: "Technical Support Specialist",
    period: "Aug 2019 - Jul 2022",
    responsibilities: [
      "Provided technical support to users by responding to calls for assistance with computers and LAN systems",
      "Conducted in-store software and hardware troubleshooting for all Apple products, ensuring prompt and effective resolution of issues",
      "Mentored clients to enhance their overall education and training in Apple products",
      "Possessed two IT certifications, demonstrating proficiency in systematic troubleshooting methodologies",
      "Exhibited success in collaborative team environments, sharing responsibility and fostering mutual accountability with fellow team members"
    ]
  },
  {
    company: "Legends Hospitality LLC",
    location: "Arlington, TX",
    title: "Tour Guide",
    period: "Oct 2016 - Aug 2019",
    responsibilities: [
      "Assisted customers as approached with stadium related questions",
      "Collaborated with other staff members and stakeholders to ensure a seamless and enjoyable tour experience",
      "Conducted in-depth specialized talks and walking tours of the Observatory",
      "Greeted and provided guests with a ticket for tours and closing the till at the end of the shift",
      "Demonstrated ability to work independently and/or in a team environment"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-portfolio-darkgray">{job.title}</CardTitle>
                  <Badge variant="outline" className="bg-blue-50 text-portfolio-blue border-portfolio-blue">
                    {job.company}
                  </Badge>
                </div>
                <CardDescription className="flex items-center mt-2">
                  <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
