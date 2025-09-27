import { Button } from "@/components/ui/button";

export const Solution = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            We build something <span className="text-primary text-glow">different</span>:
          </h2>
          
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border hover-glow transition-glow flex flex-col items-center justify-center min-h-[16rem]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                  <svg className="w-8 h- text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">Video that holds attention</h3>
            </div>
            
            <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border hover-glow transition-glow flex flex-col items-center justify-center min-h-[16rem]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">Copy that converts cold traffic</h3>
            </div>

            <div className="bg-gradient-card p-6 md:p-8 rounded-2xl border border-border hover-glow transition-glow flex flex-col items-center justify-center min-h-[16rem]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">And creative that doesn't make you hate marketing</h3>
            </div>
          </div>
          
          <div className="mb-12">
             <h3 className="text-3xl font-bold mb-8">
             <span className="text-primary">We're AdArcadia.</span>
            </h3>
            
            <h3 className="text-3xl font-bold mb-8">
              We're here to help you beat your VSL like <span className="text-primary">early '90s Mike Tyson</span>.
            </h3>
            
            <Button 
              variant="glow"
              size="xl" 
              className="text-lg px-8 py-4"
            >
              Join The VSL Wait List →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};