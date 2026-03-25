import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsuranceTrustBar from "@/components/InsuranceTrustBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StatsBar from "@/components/StatsBar";
import CareTeamSection from "@/components/CareTeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import AdvocateDoSection from "@/components/AdvocateDoSection";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function CommercialInsurancePage() {
  return (
    <main>
      <Header />
      <Hero />
      <InsuranceTrustBar />
      <ProblemSection />
      <SolutionSection />
      <StatsBar />
      <CareTeamSection />
      <TestimonialSection />
      <AdvocateDoSection />
      <HowItWorks />
      <FaqSection />
      <BottomCta />
      <Footer />
    </main>
  );
}
