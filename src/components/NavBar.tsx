
import React, { useState } from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Scale className="h-8 w-8 text-legalGold mr-2" />
          <div>
            <h1 className="font-montserrat text-lg font-bold">BAUDIN</h1>
            <p className="font-montserrat text-xs">Estudio Integral & Asociados</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-montserrat font-medium hover:text-legalGold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <Button variant="outline" className="border-legalGold text-black hover:bg-legalGold hover:text-black">
            <a href="#contacto">Contactar</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-montserrat font-medium hover:text-legalGold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" className="border-legalGold text-black hover:bg-legalGold hover:text-black w-full">
              <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contactar</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
