import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from '@/components/WhyChooseUs';
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Helpers from "@/components/Helpers";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
 
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MovingCards/>
    <UpcomingWebinars/>
    <Helpers/>
    <Footer/>
   

    
     </main>
    
  );
}
