import { Footer } from "../../components/FooterLanding";
import { NavBar } from "../../components/NavbarLanding";
import { AboutSection } from "./About/About";
import { FaqSection } from "./Faq/Faq";
import { FeaturesSection } from "./Features/Features";
import { HeroSection } from "./Hero/Hero";
import JustinaSection from "./Justina/Justina";
import { ServicesSection } from "./Services/Services";
import { TestimonialsSection } from "./Testimonial/Testimonials";

const LandingView = () => {
  return (
    <main className="lg:w-full md:mx-0 mx-auto md:max-w-full md:p-0">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <JustinaSection />
      <FaqSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default LandingView;
