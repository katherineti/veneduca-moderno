import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nuevas Modalidades de Estudio 2024",
      excerpt: "VenEduca incorpora metodologías híbridas y virtuales para mayor flexibilidad académica.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      category: "Académico",
      date: "15 de Marzo, 2024",
      author: "Decanato Académico",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Convenio Internacional con Universidades Europeas",
      excerpt: "Programa de intercambio estudiantil que abre nuevas oportunidades de formación global.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
      category: "Internacional",
      date: "10 de Marzo, 2024", 
      author: "Relaciones Internacionales",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Laboratorios de Última Generación",
      excerpt: "Inauguración de nuevos espacios tecnológicos para ingeniería e informática.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
      category: "Infraestructura",
      date: "8 de Marzo, 2024",
      author: "Dirección de Infraestructura", 
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Programa de Becas de Excelencia Académica",
      excerpt: "Nueva convocatoria para estudiantes destacados con apoyo financiero completo.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "Becas",
      date: "5 de Marzo, 2024",
      author: "Bienestar Estudiantil",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Conferencia Internacional de Innovación Educativa",
      excerpt: "Expertos mundiales se reúnen para debatir el futuro de la educación superior.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      category: "Eventos",
      date: "1 de Marzo, 2024",
      author: "Departamento de Eventos",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Graduación Extraordinaria de Ingeniería",
      excerpt: "Ceremonia especial reconoce a los mejores estudiantes de la promoción 2024.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
      category: "Graduación",
      date: "28 de Febrero, 2024",
      author: "Registro Académico",
      readTime: "4 min"
    }
  ];

  const categories = ["Todas", "Académico", "Internacional", "Infraestructura", "Becas", "Eventos", "Graduación"];

  return (
    <section className="py-20 bg-veneduca-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-veneduca-red/10 text-veneduca-red rounded-full text-sm font-medium mb-4">
            Últimas Noticias
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-veneduca-dark mb-6">
            Ven y entérate de las últimas noticias de VenEduca
          </h2>
          <p className="text-xl text-veneduca-dark-gray max-w-3xl mx-auto">
            Mantente informado sobre nuestros logros, eventos y novedades académicas.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 animate-fade-in">
          <Card className="overflow-hidden hover-lift bg-gradient-card border-0 shadow-medium">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1">
                <CardContent className="p-8 lg:p-12 h-full flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-veneduca-red text-veneduca-light rounded-full text-sm font-medium mb-4">
                    Destacado
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-veneduca-dark mb-6">
                    {news[0].title}
                  </h3>
                  <p className="text-veneduca-dark-gray text-lg mb-6 leading-relaxed">
                    {news[0].excerpt} Descubre cómo estas nuevas modalidades revolucionan 
                    la experiencia educativa, adaptándose a las necesidades del estudiante moderno 
                    con tecnología de punta y metodologías innovadoras.
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-veneduca-dark-gray">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {news[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {news[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {news[0].readTime} de lectura
                    </div>
                  </div>
                  
                  <Button className="w-fit bg-veneduca-red hover:bg-veneduca-red/90 text-veneduca-light">
                    Leer Artículo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
              
              <div className="order-1 lg:order-2">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.slice(1).map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-veneduca-red/90 text-veneduca-light rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-veneduca-dark mb-3 group-hover:text-veneduca-red transition-colors line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-veneduca-dark-gray text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-veneduca-dark-gray mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-veneduca-red border-veneduca-red hover:bg-veneduca-red hover:text-veneduca-light"
                >
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="px-8 text-veneduca-red border-veneduca-red hover:bg-veneduca-red hover:text-veneduca-light"
          >
            Ver Más Noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;