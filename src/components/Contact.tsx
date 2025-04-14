
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get In Touch</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out to me through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:brand.paul.perez@gmail.com" className="text-portfolio-blue hover:underline block mt-1">
                    brand.paul.perez@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:214-914-8599" className="hover:text-portfolio-blue block mt-1">
                    214-914-8599
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-portfolio-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="mt-1">Dallas, TX</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
              </div>
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
