// components/LandingPage/LandingPage.tsx

import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
import ChatbotButton from '../ChatbotButton/ChatbotButton';
import HomeSection from '../HomeSection/HomeSection';
import LogisticsSection from '../LogisticsSection/LogisticsSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import StatsSection from '../StatsSection/StatsSection';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import PartnerGrid from '../PartnerGrid/PartnerGrid';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ChatbotButton />
      <LogisticsSection />
      <WhyChooseUs />
      <BenefitsSection />
      <StatsSection />
      <TestimonialCard />
      <PartnerGrid />
      <Footer />
    </>
  );
};

export default LandingPage;
