import EnqHome from "@/components/home/EnqHome";
import HeroSection from "@/components/home/HeroSection";
import OurChannels from "@/components/home/OurChannels";
import QuickActions from "@/components/home/QuickActions";
import ReviewsAndRecom from "@/components/home/ReviewsAndRecom";
import VehcileRange from "@/components/home/VehcileRange";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import ModalSelectState from "@/components/others/ModalSelectState";

export default function Home() {
  return (
    <main className="">
      <ModalSelectState />
      <Header />
      <HeroSection />
      <EnqHome />
      <VehcileRange />
      <QuickActions />
      <WhyChooseUs />
      <OurChannels />
      <ReviewsAndRecom />
      <Footer />
    </main>
  );
}
