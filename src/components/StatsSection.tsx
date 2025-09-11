import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Calendar, Star } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: BookOpen,
      number: "1000+",
      label: "Proyectos Completados",
      description: "Trabajos de grado exitosos"
    },
    {
      icon: Users,
      number: "1200+", 
      label: "Graduandos",
      description: "Profesionales formados"
    },
    {
      icon: Calendar,
      number: "120+",
      label: "Eventos",
      description: "Actividades académicas anuales"
    },
    {
      icon: Star,
      number: "450+",
      label: "Reviews Positivas",
      description: "Testimonios de excelencia"
    }
  ];

  const CountUpNumber = ({ target, isVisible }: { target: string, isVisible: boolean }) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/\d/g, '');

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = numericTarget / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, numericTarget]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-veneduca relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-veneduca-light rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-veneduca-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-veneduca-light mb-6">
            Nuestra Excelencia en Números
          </h2>
          <p className="text-xl text-veneduca-light/80 max-w-3xl mx-auto">
            Más de 25 años formando profesionales de excelencia que transforman Venezuela
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="bg-veneduca-light/10 backdrop-blur-sm border-veneduca-light/20 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-veneduca-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-veneduca-red" />
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold text-veneduca-light mb-2">
                    <CountUpNumber target={stat.number} isVisible={isVisible} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-veneduca-light mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-veneduca-light/70 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h4 className="text-2xl font-bold text-veneduca-red mb-4">Excelencia Académica</h4>
            <p className="text-veneduca-light/80">
              Impulsamos la calidad de la enseñanza, la investigación y la innovación
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <h4 className="text-2xl font-bold text-veneduca-red mb-4">Formación Integral</h4>
            <p className="text-veneduca-light/80">
              Desarrollamos profesionales con valores éticos y responsabilidad social
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <h4 className="text-2xl font-bold text-veneduca-red mb-4">Innovación Constante</h4>
            <p className="text-veneduca-light/80">
              Incorporamos tecnologías y metodologías de vanguardia educativa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;