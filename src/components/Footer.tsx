
import React from "react";
import { Scale } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-legalGold mr-2" />
            <div>
              <h3 className="font-montserrat font-bold text-lg">BAUDIN</h3>
              <p className="font-montserrat text-xs text-gray-400">Estudio Integral & Asociados</p>
            </div>
          </div>
          
          <div className="font-montserrat text-center md:text-right text-sm text-gray-400">
            <p>&copy; {currentYear} BAUDIN Estudio Integral & Asociados.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
