
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-3 max-w-6xl h-screen flex flex-col">
        
         {/* Header Section with Title and Image */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">Shanthi SSVM</h1>
          </div>
          <a 
            href=" https://shanthimari.wixsite.com/cv-pm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          ><b>Resume</b></a>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/e8fc0778-9538-4751-86ed-8324167eb959.png" 
              alt="Shanthi SSVM"
              className="w-16 h-16 rounded-full object-cover border-4 border-gray-300 shadow-lg"
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
              className="w-7 h-7"
            />
          </a>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex-1 flex gap-6 overflow-hidden">
          {/* Left Side - Bio */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
            <p> <b> A math-loving <i>(Masters in Mathematics)</i>, data-curious young girl once sat 
              staring at her computer, genuinely puzzled by something we 
              all do dozens of times a day — "What happens when I 
              click send on an email?"</b></p>
              
<p>That curiosity transformed me into a self-taught coder with an MBA from Carlson School of Business and 18+ years of helping organizations build technology that actually serves people. I believe the best digital solutions happen when we blend tech with genuine care—and let the data tell the story.</p>
<p>I founded <b>NourishStayFit4Life</b> (inspired by my grandmothers' wisdom that "health is wealth") and created <b>NeuroBlossom</b>, an AI-powered Alzheimer's support app — because when technology meets empathy & care, beautiful things happen.</p>
<p>Through my <b>AI Literacy Workshops</b> and consulting work, I believe AI should be your helpful assistant. Through <b>SpurSpark</b>, I provide consulting in tech strategy, product vision, AI solutions, data analysis & research, and authentic branding.</p>
<p>Curiosity drives me, compassion guides me, and real connection motivates everything I do. When we work together, you're getting someone who genuinely cares about your success and will show up with a smile, a plan, a purpose and the data to prove it works.</p>
<p><i><b>Ready to build something meaningful together?</b></i></p>
            </p>
          </div>

          {/* Right Side - Projects */}
          <div className="w-112 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            
            <div className="space-y-4">
              {projectCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.projects.map((project, projectIndex) => (
                      <a
                        key={projectIndex}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 p-2.5 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${project.color}`}
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-sm group-hover:underline decoration-2 underline-offset-4">
                            {project.title}
                          </h4>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
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
