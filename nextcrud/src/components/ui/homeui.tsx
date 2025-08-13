import React, { useState, useEffect } from 'react';
import { LogOut, Sparkles, Zap, Activity, ChevronRight, LucideIcon } from 'lucide-react';

// Type definitions
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface QuickAction {
  icon: LucideIcon;
  label: string;
  color: string;
}

interface MousePosition {
  x: number;
  y: number;
}

// Custom components (you can replace these with your actual Heading and Para components)
const Heading: React.FC<HeadingProps> = ({ children, className = "" }) => (
  <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}>
    {children}
  </h1>
);

const Para: React.FC<ParaProps> = ({ children, className = "" }) => (
  <p className={`text-lg md:text-xl text-gray-300 leading-relaxed ${className}`}>
    {children}
  </p>
);

const FuturisticDashboard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleLogout = (): void => {
    // Your logout logic here
    console.log('Logging out...');
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Generate floating particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickActions: QuickAction[] = [
    { icon: Zap, label: 'Analytics', color: 'from-yellow-400 to-orange-500' },
    { icon: Activity, label: 'Performance', color: 'from-green-400 to-blue-500' },
    { icon: Sparkles, label: 'Insights', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-black">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
        {/* Header section */}
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Neural Interface Active</span>
          </div>

          <Heading className="mb-6 drop-shadow-2xl">
            Welcome to Your
            <br />
            <span className="relative">
              Neural Dashboard
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse" />
            </span>
          </Heading>

          <Para className="mb-12 max-w-3xl mx-auto backdrop-blur-sm">
            Step into the future of digital interaction. Your personalized command center 
            awaits, powered by advanced neural networks and designed to amplify your 
            potential. Every element here responds to your presence, creating an 
            immersive experience that adapts and evolves with you.
          </Para>
        </div>

        {/* Quick actions grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" 
                   style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{action.label}</h3>
              <p className="text-gray-400 text-sm">Access advanced {action.label.toLowerCase()} tools</p>
              
              <ChevronRight className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Enhanced logout button */}
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleLogout}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-red-500/30 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-red-400/50"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Button content */}
            <div className="relative flex items-center gap-3">
              <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Disconnect Neural Link</span>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Neural session will be safely terminated
          </p>
        </div>
      </div>

      {/* Bottom ambient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  );
};

export default FuturisticDashboard;