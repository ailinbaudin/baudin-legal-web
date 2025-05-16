
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const Index: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("font-montserrat");
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-element");
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        
        if (elementTop < window.innerHeight - elementHeight / 2) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Especialidades />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
