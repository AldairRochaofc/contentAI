import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative overflow-x-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00E676]/4 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#00C853]/3 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Dashboard />
        <Benefits />
        <Comparison />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
