"use client";
import HeroSection from '../app/components/sections/HeroSection';
import FeaturesSection from '../app/components/sections/FeaturesSection';
import AppExperienceSection from '../app/components/sections/AppExperienceSection';
// import Web3Section from '../app/components/sections/FeaturesSection';
import Footer from '../app/components/sections/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <FeaturesSection />
      <AppExperienceSection />
      {/* <Web3Section /> */}
      <Footer />
    </div>
  );
}