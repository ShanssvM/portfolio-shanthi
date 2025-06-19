
import React from 'react';
import { ExternalLink, Code, Heart, Users, PenTool } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      title: "NeuroBlossom - Alzheimer's Support App",
      url: "https://memory-match-buddy.lovable.app/home",
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "AI-Powered Interactive Career Pathway Tool", 
      url: "https://shanssvm.github.io/job-network-viz",
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "Spur Spark",
      url: "https://sites.google.com/view/spur-spark/home", 
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "Nourish Stay Fit 4 Life",
      url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/recipes-1",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      title: "Blogger",
      url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/blog",
      color: "text-teal-500 hover:text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header Section with Title and Image */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">Shanthi SSVM</h1>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/6395cc04-71c7-4632-8e4e-83c880177be8.png" 
              alt="Shanthi SSVM"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 shadow-lg"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <a 
            href="https://www.linkedin.com/in/helloshanthissv/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/f27d6b5c-2df9-4583-bbca-9966ae5c253a.png" 
              alt="LinkedIn" 
              className="w-8 h-8"
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Bio Section */}
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
               I'm a math girl who loves to solve problems with numbers — and it all started with one simple question: what really happens when you click 'send' on an email?
That tiny moment sparked a lifelong curiosity. I wanted to understand the magic behind the screen — so I learned computer languages, and dove into the world of tech. What began with code quickly grew into a career.
Over the past 18+ years, I've grown from a developer into a product manager, then into a digital strategist and consultant — blending business, creativity, and tech to solve real world problems. Today, I help individuals and organizations navigate the digital space by offering services in tech strategy, branding, AI implementation, and more.
From my grandmothers and mom, I learned early on that "health is wealth." That wisdom shaped the way I live — eating with awareness, moving with purpose, and caring for both mind and body. That's how NourishStayFit4Life was born — not just a mantra, but a lifestyle rooted in balance and well-being.
While connecting a lifelong learning community, I noticed something unsettling: so many individuals — bright, driven, vibrant — were forgetting things as we age. I learned about the caregivers, not just details here and there, but meaningful parts of life. As a techy girl who also values health and empathy, I couldn't look away. I had to help. That led to blend technology, wellness, and humanity - That's what led to NeuroBlossom — an AI-powered support app for Alzheimer's. Designed with care and empathy, it's a small piece of technology.
I also host AI Literacy Workshops for both technical and non-technical audiences — from business leaders to nonprofits — helping others understand and use AI in ways that matter.
No journey is linear but how quickly we rise and how we keep moving forward with faith is important — but every step has taught me how powerful it is when we combine knowledge, compassion, and action. 
Whether it's building apps, leading workshops, or sharing a wellness tip — I show the same curiosity and big smile to help make life a little brighter — through tech, wellness, and human connection.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            
            <div className="space-y-3">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${project.color}`}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
           
            
             
              "Bridging the gap between technology and human connection through innovative solutions."
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
