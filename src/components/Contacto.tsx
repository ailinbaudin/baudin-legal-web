
import React from "react";
import { Phone, MessageSquare, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacto: React.FC = () => {
  const phoneNumber = "01138979208";
  const whatsappMessage = "Hola, necesito asesoramiento jurídico.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-2 text-center">
          Contacto
        </h2>
        <div className="w-20 h-1 bg-legalGold mx-auto mb-10"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-auto flex-1 max-w-md animate-fade-in">
            <div className="mb-6 flex items-center">
              <Phone className="text-legalGold mr-3" />
              <div>
                <h3 className="font-montserrat font-semibold text-lg">Teléfono / WhatsApp</h3>
                <p className="font-montserrat text-gray-600">011 3897 9208</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <MessageSquare className="text-legalGold mr-3" />
              <div>
                <h3 className="font-montserrat font-semibold text-lg">Consultas</h3>
                <p className="font-montserrat text-gray-600">Con turno previo</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-legalGold hover:bg-legalGold/90 text-black font-montserrat flex items-center justify-center gap-2"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <WhatsApp size={20} />
              <span>Contactar por WhatsApp</span>
            </Button>
          </div>
          
          <div className="flex-1 max-w-md animate-fade-in">
            <div className="bg-legalGold text-black p-8 rounded-lg shadow-lg">
              <h3 className="font-montserrat font-bold text-xl mb-4 text-center">
                Nuestra promesa
              </h3>
              <p className="font-montserrat text-lg font-medium mb-6 text-center">
                Atención personalizada - Confidencialidad y compromiso
              </p>
              <p className="font-montserrat text-center">
                En BAUDIN Estudio Integral & Asociados nos comprometemos a brindar un servicio jurídico de excelencia, con atención personalizada y soluciones efectivas para cada caso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
