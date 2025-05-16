
import React from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Scale className="h-16 w-16 md:h-20 md:w-20 text-legalGold animate-fade-in" />
        </div>
        <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          BAUDIN <span className="text-legalGold">ESTUDIO INTEGRAL</span> & ASOCIADOS
        </h1>
        <p className="font-montserrat text-lg md:text-xl mb-8 text-gray-600 animate-fade-in">
          Asesoramiento Jurídico Integral
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up">
          <Button className="bg-legalGold hover:bg-legalGold/90 text-black font-montserrat">
            <a href="#especialidades">Nuestras especialidades</a>
          </Button>
          <Button variant="outline" className="border-legalGold text-black hover:bg-legalGold/10 font-montserrat">
            <a href="#contacto">Contactar ahora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
