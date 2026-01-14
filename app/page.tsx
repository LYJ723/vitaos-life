import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Framework } from "@/components/sections/framework";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SampleReport } from "@/components/sections/sample-report";
import { Pricing } from "@/components/sections/pricing";
import { FoundingUser } from "@/components/sections/founding-user";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-gold/20 selection:text-gold-dark">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Framework />
        <HowItWorks />
        <SampleReport />
        <Pricing />
        <FoundingUser />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
