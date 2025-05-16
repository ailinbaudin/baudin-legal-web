
import React from "react";
import { Gavel, Briefcase, FileText, FilePen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EspecialidadProps {
  title: string;
  icon: React.ReactNode;
  delay: string;
}

const Especialidad: React.FC<EspecialidadProps> = ({ title, icon, delay }) => {
  return (
    <div className={`animate-slide-up`} style={{ animationDelay: delay }}>
      <Card className="hover:border-legalGold transition-all duration-300 hover:shadow-md h-full">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div className="mb-4 text-legalGold">{icon}</div>
          <h3 className="font-montserrat font-semibold text-lg mb-2">{title}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

const Especialidades: React.FC = () => {
  const especialidades = [
    { 
      title: "Derecho Penal", 
      icon: <Gavel size={36} />,
      delay: "0ms"
    },
    { 
      title: "Derecho Laboral", 
      icon: <Briefcase size={36} />,
      delay: "100ms"
    },
    { 
      title: "Daños y Perjuicios", 
      icon: <FileText size={36} />,
      delay: "200ms"
    },
    { 
      title: "Sucesiones", 
      icon: <Users size={36} />,
      delay: "300ms"
    },
    { 
      title: "Divorcios", 
      icon: <FilePen size={36} />,
      delay: "400ms"
    },
  ];
  
  return (
    <section id="especialidades" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-2 text-center">
          Nuestras Especialidades
        </h2>
        <div className="w-20 h-1 bg-legalGold mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {especialidades.map((esp, index) => (
            <Especialidad
              key={index}
              title={esp.title}
              icon={esp.icon}
              delay={esp.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
