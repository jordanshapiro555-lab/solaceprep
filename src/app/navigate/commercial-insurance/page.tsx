import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsuranceTrustBar from "@/components/InsuranceTrustBar";
import TrustSignalsBar from "@/components/TrustSignalsBar";
import ProblemSection from "@/components/ProblemSection";
import PainPointGrid from "@/components/PainPointGrid";
import SolutionSection from "@/components/SolutionSection";
import StatsBar from "@/components/StatsBar";
import CareTeamSection from "@/components/CareTeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import AdvocateDoSection from "@/components/AdvocateDoSection";
import HowItWorks from "@/components/HowItWorks";
import PatientStoriesSection from "@/components/PatientStoriesSection";
import FaqSection from "@/components/FaqSection";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function CommercialInsurancePage() {
  return (
    <main>
      <Header />
      <Hero />
      <InsuranceTrustBar />
      <TrustSignalsBar />
      <ProblemSection />
      <PainPointGrid />
      <SolutionSection />
      <StatsBar />
      <CareTeamSection />
      <TestimonialSection />
      <AdvocateDoSection />
      <HowItWorks />
      <PatientStoriesSection />
      <FaqSection />
      <BottomCta />
      <Footer />
    </main>
  );
}
