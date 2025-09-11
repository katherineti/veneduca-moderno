import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Yeli Chirino",
      program: "MBA en Gestión de Negocios Internacionales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Los cursos están alineados con los conocimientos más nuevos necesarios para enfrentar el mundo real. Las tareas son desafiantes y fomentan el uso del pensamiento innovador y creativo. Recomiendo el MBA con enfoque en negocios internacionales a todos los que buscan aportar su mejor potencial.",
      rating: 5
    },
    {
      name: "Lidia Fernández",
      program: "MBA con Especialización en Finanzas", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Los cursos están diseñados para proporcionar conocimientos actuales y aplicables al mundo profesional. Las actividades son exigentes y promueven el pensamiento innovador y crítico. Recomiendo el MBA con especialización en finanzas a quienes desean maximizar su potencial.",
      rating: 5
    },
    {
      name: "Julio Manuel",
      program: "MBA en Gestión de Proyectos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      quote: "El contenido de los cursos está alineado con las últimas tendencias del mercado. Las asignaciones desafían y estimulan la creatividad y la resolución de problemas. Recomiendo el MBA en gestión de proyectos a todos los que buscan destacar en su carrera.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-veneduca-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-veneduca-red/10 text-veneduca-red rounded-full text-sm font-medium mb-4">
            Lo que dicen nuestros estudiantes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-veneduca-dark mb-6">
            Acerca de Nuestra Universidad
          </h2>
          <p className="text-xl text-veneduca-dark-gray max-w-3xl mx-auto">
            Conoce las experiencias de nuestros graduados y cómo VenEduca ha transformado sus vidas profesionales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all animate-scale-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="h-8 w-8 text-veneduca-red/30" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-veneduca-dark-gray text-center mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-veneduca-red/20 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="text-lg font-bold text-veneduca-dark mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-veneduca-red font-medium text-center">
                    {testimonial.program}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-veneduca-red rounded-full opacity-30"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-veneduca rounded-2xl p-12 text-veneduca-light">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para ser parte de nuestra comunidad?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a miles de profesionales exitosos que han transformado sus carreras con VenEduca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-veneduca-light text-veneduca-dark px-8 py-4 rounded-xl font-semibold hover-lift transition-all">
                Solicitar Información
              </button>
              <button className="border-2 border-veneduca-light text-veneduca-light px-8 py-4 rounded-xl font-semibold hover:bg-veneduca-light hover:text-veneduca-dark transition-all">
                Ver Programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;