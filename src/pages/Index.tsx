import React from 'react';
import { ExternalLink, Code, Heart, Users, PenTool } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      title: "NeuroBlossom - Alzheimer's Support App",
      url: "#",
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "AI-Powered Interactive Career Pathway Tool", 
      url: "#",
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "Spur Spark",
      url: "#", 
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "Nourish Stay Fit 4 Life",
      url: "#",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      title: "Blogger",
      url: "#",
      color: "text-teal-500 hover:text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Header Section with Title and Image */}
        <div className="flex items-center gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">Shanthi SSVM</h1>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/6395cc04-71c7-4632-8e4e-83c880177be8.png" 
              alt="Shanthi SSVM"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-lg"
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
              className="w-12 h-12"
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a dynamic fusion of technology, wellness, and creativity! With 18+ years in IT, 
                evolved from a developer to a Digital & Technical Product Manager, leveraging your 
                math and MBA background to craft meaningful solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">AI Explorer:</span>
                    <span className="text-gray-600 ml-2">
                      Self-taught in AI, creating innovative projects like AI-powered career 
                      tools and Alzheimer's support apps.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Fitness Advocate:</span>
                    <span className="text-gray-600 ml-2">
                      As a group fitness instructor and half-marathon runner, you 
                      inspire others to prioritize health and movement.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <PenTool className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Cultural Storyteller:</span>
                    <span className="text-gray-600 ml-2">
                      I express myself through art, writing, and sharing stories that bridge 
                      cultures and experiences.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  className={`group flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${project.color}`}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-lg group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-sm text-gray-600 text-center italic">
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
