export const TeamProfiles = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Meet The Brains Behind The <span className="text-primary">Funnies</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Israel Fernandez */}
          <div className="bg-card rounded-2xl p-8 border border-border hover-glow transition-glow">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-glow rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-primary-foreground glow-primary-lg">
                IF
              </div>
              <h3 className="text-3xl font-bold mb-2 text-primary">Israel Fernandez</h3>
              <p className="text-xl text-muted-foreground">VSL Expert, Copywriter, Marketing Consultant</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Israel is a seasoned VSL copywriter and marketing consultant for Health, Biz Opp, and High-Ticket offers 
                with over 14 years of experience (although he's 29 as of 2025).
              </p>
              <p>
                Israel had his breakthrough in the direct response world working with Hemon Media under Lee Thompson and 
                Ashton Shanks, moving on to become Copy Chief at Adspend.com and BAD Marketing.
              </p>
              <p>
                He was responsible for over <span className="text-primary font-semibold">$10,000,000 in monthly ad spend</span> for 
                household names under BAD Marketing's brand for two years.
              </p>
              <p>
                Now, he's a VSL copywriter and partner at AdArcadia with Lee, where they work together to create warm-up 
                mechanisms that sell faster and make people watch and convert.
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Contact: <span className="text-primary">israel@fdzconsulting.com</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🌶 VSL Scripts</div>
                  <div className="text-xs text-muted-foreground">Long Form, Short Form</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🌶 Ad Copy</div>
                  <div className="text-xs text-muted-foreground">Creative Direction</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🌶 Sales Pages</div>
                  <div className="text-xs text-muted-foreground">High Converting</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🌶 CRO</div>
                  <div className="text-xs text-muted-foreground">Optimization</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lee Thompson */}
          <div className="bg-card rounded-2xl p-8 border border-border hover-glow transition-glow">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-glow rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-primary-foreground glow-primary-lg">
                LT
              </div>
              <h3 className="text-3xl font-bold mb-2 text-primary">Lee Thompson</h3>
              <p className="text-xl text-muted-foreground">Marketing Fixer</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Went from Intern Copywriter to CMO for one of the fastest-growing direct-response ad agencies in America – 
                Hemon Media, owned by Ashton Shanks.
              </p>
              <p>
                Headed up the copy team at BAD Marketing as Copy Chief, overseeing the copy for 40+ accounts and 
                <span className="text-primary font-semibold"> $10M/month in ad spend</span>.
              </p>
              <p>
                Moved on to start own advertising agency, working with clients like Charlie Morgan 
                ($1M/month in rev, $250k+/month in ad spend) and William Brown.
              </p>
              <p>
                Now he specializes in marketing/funnel strategy, end-to-end problem-solving within the realm of cold traffic, 
                and partner at AdArcadia with Israel Fernandez.
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Contact: <span className="text-primary">anabella@fdzconsulting.com</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🍀 Funnel Strategy</div>
                  <div className="text-xs text-muted-foreground">End-to-end solutions</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🍀 Data Analysis</div>
                  <div className="text-xs text-muted-foreground">Performance optimization</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🍀 Ad Creatives</div>
                  <div className="text-xs text-muted-foreground">Cold traffic conversion</div>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">🍀 VSLs & CRO</div>
                  <div className="text-xs text-muted-foreground">Complete funnels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};