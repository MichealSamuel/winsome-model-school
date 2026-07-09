import { useEffect, useState } from 'react';
import wfsLogo from '@/assets/wms-logo.jpg';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Matches the new ~400ms-1.2s real loading window in App.tsx (previously ~4.5s,
    // which no longer matched once the artificial 5-second delay was removed).
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 12);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-school/25 rounded-full animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary/25 rounded-full animate-bounce" 
             style={{ animationDelay: '0.5s', animationDuration: '2.8s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
               backgroundSize: '20px 20px'
             }} />
      </div>

      <div className="relative z-10 text-center space-y-10">
        {/* Winsome Model Schools Official Logo */}
        <div className="relative">
          <div className="w-36 h-36 mx-auto rounded-3xl bg-background/95 backdrop-blur-md border-2 border-primary/30 shadow-elegant flex items-center justify-center p-5 animate-scale-in">
            <img 
              src={wfsLogo}
              alt="Winsome Model Schools Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>
          
          {/* Enhanced glow rings */}
          <div className="absolute inset-0 w-36 h-36 mx-auto rounded-3xl bg-primary/8 animate-ping" 
               style={{ animationDuration: '2.5s' }} />
          <div className="absolute inset-3 w-30 h-30 mx-auto rounded-2xl bg-accent/12 animate-ping" 
               style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute inset-6 w-24 h-24 mx-auto rounded-xl bg-school/10 animate-ping" 
               style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        </div>

        {/* School Name with enhanced styling */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl font-display font-semibold text-primary tracking-tight">
            Winsome Model Schools
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50"></div>
            <p className="text-muted-foreground font-medium text-lg">
              Excellence in Education
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50"></div>
          </div>
          <p className="text-sm text-muted-foreground/80 font-medium tracking-wide">
            STRIVE TO WIN
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-80 mx-auto animate-fade-in space-y-4" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden border border-border/50">
              <div 
                className="h-full bg-gradient-academic transition-all duration-500 ease-out relative rounded-full"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-1 transition-all duration-500 ease-out" 
                 style={{ left: `${Math.max(0, Math.min(92, progress - 4))}%` }}>
              <div className="w-4 h-4 bg-accent rounded-full shadow-glow animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground/70 font-medium">Preparing Excellence</span>
            <span className="text-primary font-semibold tabular-nums">
              {progress}%
            </span>
          </div>
          
          {/* Loading dots animation */}
          <div className="flex justify-center space-x-1 mt-4">
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
