
import React from 'react';
import { ExternalLink, Users } from 'lucide-react';

const Index = () => {
  const projectCategories = [
    {
      category: "Apps",
      projects: [
        {
          title: "NeuroBlossom",
          url: "https://neuro-blossom.netlify.app/",
          color: "text-purple-500 hover:text-purple-600"
        },
        {
          title: "Wellness Journal",
          url: "https://app--snap-bites-daae07e4.base44.app",
          color: "text-purple-500 hover:text-purple-600"
        },
        {
          title: "Vedic Math (in progress)",
          url: "underconstruction",
          color: "text-purple-500 hover:text-purple-600"
        }
      ]
    },
    {
      category: "AI",
      projects: [
        {
          title: "Responsible AI with ShanthiSSVM",
          url: "https://shanssvm.github.io/ai-with-shanthi/", 
          color: "text-blue-500 hover:text-blue-600"
        },
        {
          title: "AI Career Tool", 
          url: "https://shanssvm.github.io/job-network-viz",
          color: "text-blue-500 hover:text-blue-600"
        }
      ]
    },
    {
      category: "Health is Wealth",
      projects: [
        {
          title: "Nourish Stay Fit 4 Life",
          url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/recipes-1",
          color: "text-green-500 hover:text-green-600"
        },
        {
          title: "Blog",
          url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/blog",
          color: "text-green-500 hover:text-green-600"
        }
      ]
    },
    {
      category: "Consulting",
      projects: [
        {
          title: "SpurSpark",
          url: "https://sites.google.com/view/spur-spark/home", 
          color: "text-orange-500 hover:text-orange-600"
        }
      ]
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-3 py-2 max-w-7xl h-full flex flex-col">
        
        {/* Ultra Compact Header */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-gray-800">Shanthi SSVM</h1>
          <div className="flex items-center gap-3">
            <a href="https://shanthimari.wixsite.com/cv-pm" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:opacity-80">Resume</a>
            <img src="/lovable-uploads/e8fc0778-9538-4751-86ed-8324167eb959.png" alt="Shanthi SSVM" className="w-8 h-8 rounded-full object-cover border border-gray-300" style={{ objectPosition: 'center top' }} />
            <a href="https://www.linkedin.com/in/helloshanthissv/" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/f27d6b5c-2df9-4583-bbca-9966ae5c253a.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Ultra Compact Grid Layout */}
        <div className="flex-1 grid grid-cols-6 gap-3 min-h-0">
          
          {/* Bio Section - 4 columns */}
          <div className="col-span-4">
            <div className="text-sm text-gray-600 leading-relaxed space-y-2 h-full">
              <p><b>A math-loving <i>(Masters in Mathematics)</i>, data-curious young girl once sat staring at her computer, genuinely puzzled by something we all do dozens of times a day — "What happens when I click send on an email?"</b></p>
              <p>That curiosity transformed me into a self-taught coder with an MBA from Carlson School of Business and 18+ years of helping organizations build technology that actually serves people. I believe the best digital solutions happen when we blend tech with genuine care—and let the data tell the story.</p>
              <p>I founded <b>NourishStayFit4Life</b> (inspired by my grandmothers' wisdom that "health is wealth") and created <b>NeuroBlossom</b>, an AI-powered Alzheimer's support app — because when technology meets empathy & care, beautiful things happen.</p>
              <p>Through my <b>AI Literacy Workshops</b> and consulting work, I believe AI should be your helpful assistant. Through <b>SpurSpark</b>, I provide consulting in tech strategy, product vision, AI solutions, data analysis & research, and authentic branding.</p>
              <p>Curiosity drives me, compassion guides me, and real connection motivates everything I do. When we work together, you're getting someone who genuinely cares about your success and will show up with a smile, a plan, a purpose and the data to prove it works.</p>
              <p><i><b>Ready to build something meaningful together?</b></i></p>
            </div>
          </div>

          {/* Projects Section - 2 columns */}
          <div className="col-span-2">
            <div className="flex items-center gap-1 mb-2">
              <Users className="w-3 h-3 text-blue-500" />
              <h2 className="text-sm font-bold text-gray-800">Featured Projects</h2>
            </div>
            
            <div className="space-y-2">
              {projectCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded p-2 shadow-sm border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      category.category === 'Apps' ? 'bg-purple-500' :
                      category.category === 'AI' ? 'bg-blue-500' :
                      category.category === 'Health is Wealth' ? 'bg-green-500' :
                      'bg-orange-500'
                    }`}></div>
                    {category.category}
                  </h3>
                  <div className="space-y-0.5">
                    {category.projects.map((project, projectIndex) => (
                      <a
                        key={projectIndex}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-1 p-1.5 rounded hover:bg-gray-50 transition-colors ${project.color}`}
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs leading-tight group-hover:underline truncate">
                            {project.title}
                          </h4>
                        </div>
                        <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
