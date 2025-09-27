export const Problem = () => {
  return (
    <section className="py-20 bg-gradient-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
            Most VSLs Are <br/> <span className="text-destructive">Absolute</span> Garbage.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            And by "absolute garbage", we mean… 
            <br/> ...They're as enjoyable as getting a root canal done.
            <br />
            But not just because we're trying to sell you on "hey write my VSL and create my funnel" and all that.
          </p>
          
          <div className="bg-card rounded-2xl p-8 mb-12 border border-border shadow-lg hover-glow transition-glow">
            <h3 className="text-2xl font-semibold mb-6 text-primary">It's backed by numbers.</h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              In fact, Vidalytics — one of our partners, and the people who've analyzed over{" "}
              <span className="text-primary font-semibold">20,000 VSLs</span> that generated{" "}
              <span className="text-primary font-semibold">$2 billion in sales</span> — found that:
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="bg-gradient-primary p-6 rounded-xl border border-primary/20">
                <div className="text-sm text-muted-foreground">The average conversion rate across <strong>all</strong> VSLs</div>

                <div className="text-3xl font-bold text-destructive mb-2">1.21%</div>
                <div className="text-xs text-muted-foreground mt-2 italic">
                  (Translation: 98.79% of people pull an Irish Goodbye on you.)
                </div>
              </div>
              
              <div className="bg-gradient-primary p-6 rounded-xl border border-primary/20">
                <div className="text-sm text-muted-foreground">Only</div>

                <div className="text-3xl font-bold text-destructive mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Make it past the 2-minute mark</div>
              </div>
              
              <div className="bg-gradient-primary p-6 rounded-xl border border-primary/20">
                <div className="text-sm text-muted-foreground">Only</div>

                <div className="text-3xl font-bold text-destructive mb-2">22%</div>
                <div className="text-sm text-muted-foreground">Even make it to the CTA</div>
              </div>

              <div className="bg-gradient-primary p-6 rounded-xl border border-primary/20">
                <div className="text-sm text-muted-foreground"> And if your CTA drops too late</div>
                <div className="text-sm text-muted-foreground"> (say, around 79% in), </div>


                <div className="text-xl font-bold text-destructive mb-2">your conversions tank.</div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground italic">
              These aren't numbers and that's it. These are live-market autopsy reports.
            </p>
          </div>
          
          <div className="text-xl text-muted-foreground leading-relaxed">
            <p className="mb-6">
              And unless you're deeply obsessed with viewer behavior, click decay, emotional sequencing, and retention stacking…
            </p>
            <p className="text-2xl font-semibold text-destructive mb-6">
              …Your VSL is going to be a walking corpse.
            </p>
            <p className="mb-6">
              Meaning:
            </p>
            <p>
              They either lull you to sleep, scream like a used car ad, or spend 4 minutes reminding you that 
              "99% of people fail" while proving why the scriptwriter is one of them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};