import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 13, 20, 0.8), rgba(13, 13, 20, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-wider text-primary-glow mb-4 animate-glow-pulse">
              Ad Arcadia Home Page
            </div>
            <div className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground">
              Video Sales Letters That <br/>
              <span className="text-primary text-glow">Actually Work.</span> Imagine That.
              
            </div>
            <div>
               <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From the Beautiful Blue Eyes of Lee Thompson, and the Lady-Killer Smile of Israel Fernandez…
            </p>
            </div>
            <div>
               <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Welcome To…
            </p>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow font-orbitron">
              <span className="bg-gradient-glow bg-clip-text text-transparent">
                ADARCADIA
              </span>
            </h1>
               <div>
               <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              And if you’re here, you probably already know who sent you.
            </p>
            </div>

          </div>
          
          <div className="mb-12">
           
            
            <Button 
              variant="glow"
              size="xl" 
              className="text-lg px-8 py-4"
            >
              Join The VSL Wait List →
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span>Vidalytics Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Trusted Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};