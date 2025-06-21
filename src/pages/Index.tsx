
import React from 'react';
import { ExternalLink, Users } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      title: "NeuroBlossom",
      url: "https://memory-match-buddy.lovable.app/home",
      color: "text-orange-500 hover:text-orange-600"
    },
   {
      title: "SpurSpark",
      url: "https://sites.google.com/view/spur-spark/home", 
      color: "text-orange-500 hover:text-orange-600"
    },
    {
      title: "Nourish Stay Fit 4 Life",
      url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/recipes-1",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      title: "Blog",
      url: "https://stayinspiredsssv.wixsite.com/nourishstayfit4life/blog",
      color: "text-teal-500 hover:text-teal-600"
    },
    {
      title: "AI Career Tool", 
      url: "https://shanssvm.github.io/job-network-viz",
      color: "text-orange-500 hover:text-orange-600"
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
             <b>It all started with a simple question: "What happens when you click 'send' on an email?"</b>
<p>That curiosity transformed a math girl into a self-taught coder with 18+ years of helping organizations build technology that actually serves people. I believe the best digital solutions happen when we blend tech with genuine care—and let the data tell the story.</p>
<p>I founded <b>NourishStayFit4Life</b> (inspired by my grandmothers' wisdom that "health is wealth") and created <b>NeuroBlossom</b>, an AI-powered Alzheimer's support app—because when technology meets love, beautiful things happen.</p>
<p>Through my <b>AI Literacy Workshops</b> and consulting work, I believe AI should be your helpful assistant. Through <b>SpurSpark</b>, I provide consulting in tech strategy, product vision, AI solutions, data analysis & research, and authentic branding.</p>
<p>I'm driven by curiosity, fueled by compassion, and motivated by connection. When we work together, you're getting someone who genuinely cares about your success and will show up with a smile, a plan, a purpose—and the data to prove it works.</p>
<li>Ready to build something meaningful together?</li>
            </p>
          </div>

          {/* Right Side - Projects */}
          <div className="w-100 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-500" />
              <h2 className="text-lg font-bold text-gray-800">Featured Projects</h2>
            </div>
            
            <div className="space-y-1">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-1 p-1 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${project.color}`}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-m group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
