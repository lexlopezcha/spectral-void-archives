import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { TeamProfiles } from "@/components/TeamProfiles";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-primary">
      <Hero />
      <Problem />
      <Solution />
      <TeamProfiles />
    </main>
  );
};

export default Index;