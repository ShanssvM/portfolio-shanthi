
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
                I am a dynamic fusion of technology, wellness, and creativity! With 18+ years in IT, 
                evolved from a developer to a Digital & Technical Product Manager, leveraging your 
                math and MBA background to craft meaningful solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">AI Explorer:</span>
                    <span className="text-gray-600 ml-2 text-sm">
                      Self-taught in AI, creating innovative projects like AI-powered career 
                      tools and Alzheimer's support apps.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">Fitness Advocate:</span>
                    <span className="text-gray-600 ml-2 text-sm">
                      As a group fitness instructor and half-marathon runner, you 
                      inspire others to prioritize health and movement.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <PenTool className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">Cultural Storyteller:</span>
                    <span className="text-gray-600 ml-2 text-sm">
                      I express myself through art, writing, and sharing stories that bridge 
                      cultures and experiences.
                    </span>
                  </div>
                </div>
              </div>
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
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-xs text-gray-600 text-center italic">
                "Bridging the gap between technology and human connection through innovative solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
