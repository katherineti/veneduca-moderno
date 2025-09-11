import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Award, Flag } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Nuestra Misión",
      description: "VenEduca es una institución privada que imparte educación universitaria de alta calidad, mediante la creación y difusión del conocimiento, formando profesionales integrales con valores éticos y competencias globales."
    },
    {
      icon: Eye,
      title: "Nuestra Visión", 
      description: "Ser la institución universitaria líder en la formación de recursos humanos altamente calificados, reconocida por su excelencia académica, investigación e innovación tecnológica."
    },
    {
      icon: Award,
      title: "Excelencia Académica",
      description: "Impulsamos la calidad de la enseñanza, la investigación y la innovación, a través de la constante búsqueda del conocimiento y la aplicación de metodologías de vanguardia."
    },
    {
      icon: Flag,
      title: "Compromiso Social",
      description: "Formamos profesionales comprometidos con el desarrollo sostenible de Venezuela, capaces de generar impacto positivo en sus comunidades y el país."
    }
  ];

  return (
    <section className="py-20 bg-veneduca-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-veneduca-red/10 text-veneduca-red rounded-full text-sm font-medium mb-4">
            ¿Quiénes Somos?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-veneduca-dark mb-6">
            Acerca de Nuestra Universidad
          </h2>
          <p className="text-xl text-veneduca-dark-gray max-w-4xl mx-auto leading-relaxed">
            Somos una comunidad vibrante, diversa y dinámica, integrada por estudiantes, 
            profesores, investigadores y personal administrativo, todos comprometidos con 
            la formación integral de los estudiantes.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="group hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-veneduca rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-veneduca-light" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-veneduca-red mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-veneduca-dark-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* History & Values Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* History */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-veneduca-red mb-6">Nuestros Inicios</h3>
            <div className="space-y-6 text-veneduca-dark-gray">
              <p className="leading-relaxed">
                VenEduca fue fundada con el voto favorable del Consejo Nacional de Universidades 
                en 1997. La Universidad abrió inicialmente sus puertas en la sede de Plaza 
                Venezuela de la ciudad de Caracas, para la primera cohorte estudiantil en 
                el período académico mayo-agosto del año 1998.
              </p>
              
              <p className="leading-relaxed">
                Ofreciendo las carreras de Administración de Empresas, Administración de 
                Empresas Turísticas, Contaduría Pública, Comercio Internacional, Economía, 
                Ingeniería en Mantenimiento de Obras, Ingeniería en Informática, Educación 
                Mención Inglés y Publicidad.
              </p>

              <p className="leading-relaxed">
                Posteriormente, el Consejo Nacional de Universidades aprobó el funcionamiento 
                de la Universidad en la ciudad de Valencia, abriendo sus puertas en el año 
                2001 en el Núcleo Valencia ubicado en el Trigal.
              </p>
            </div>
          </div>

          {/* University Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" 
                alt="Campus Universitario VenEduca"
                className="w-full h-80 object-cover rounded-xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-veneduca/20 rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-veneduca-light">
                <h4 className="text-xl font-bold mb-2">Campus Moderno</h4>
                <p className="text-sm opacity-90">Instalaciones diseñadas para la excelencia educativa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Symbols Section */}
        <div className="mt-20 bg-veneduca-gray rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-veneduca-red mb-4">Símbolos</h3>
            <p className="text-veneduca-dark-gray max-w-3xl mx-auto">
              El Himno de VenEduca se creó en 1999. En el Consejo Universitario N° 05 del año 99 
              se convocó un concurso para la creación de la letra del himno de la Universidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-veneduca-light p-6 rounded-xl hover-lift">
              <Flag className="h-12 w-12 text-veneduca-red mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-veneduca-dark mb-2">Himno</h4>
              <p className="text-sm text-veneduca-dark-gray">
                Creado en 1999 como símbolo de identidad institucional
              </p>
            </div>
            
            <div className="bg-veneduca-light p-6 rounded-xl hover-lift">
              <Award className="h-12 w-12 text-veneduca-red mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-veneduca-dark mb-2">Escudo</h4>
              <p className="text-sm text-veneduca-dark-gray">
                Representa nuestros valores y tradición académica
              </p>
            </div>
            
            <div className="bg-veneduca-light p-6 rounded-xl hover-lift">
              <Heart className="h-12 w-12 text-veneduca-red mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-veneduca-dark mb-2">Valores</h4>
              <p className="text-sm text-veneduca-dark-gray">
                Excelencia, integridad y compromiso social
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;