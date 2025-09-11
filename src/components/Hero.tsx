import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-veneduca overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-veneduca-light rounded-full"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border border-veneduca-light rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-veneduca-light rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-veneduca-light space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Educación
                <span className="block text-veneduca-red">Transformadora</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light opacity-90">
                Base de la Creación Moderna
              </h2>
            </div>

            <p className="text-xl opacity-80 max-w-lg leading-relaxed">
              En VenEduca formamos profesionales integrales con visión global, 
              comprometidos con la excelencia académica y el desarrollo sostenible 
              de Venezuela.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-veneduca-red hover:bg-veneduca-red/90 text-veneduca-light hover-glow group">
                Conoce Nuestros Programas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-veneduca-light hover:bg-veneduca-light text-zinc-950">
                Contáctanos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-veneduca-light/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-veneduca-red mb-2">25+</div>
                <div className="text-sm opacity-80">Años de Excelencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-veneduca-red mb-2">15k+</div>
                <div className="text-sm opacity-80">Graduados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-veneduca-red mb-2">50+</div>
                <div className="text-sm opacity-80">Especializaciones</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="bg-veneduca-light/10 backdrop-blur-sm p-6 rounded-xl border border-veneduca-light/20 hover-lift">
                <BookOpen className="h-8 w-8 text-veneduca-red mb-4" />
                <h3 className="text-veneduca-light font-semibold mb-2">Programas Acreditados</h3>
                <p className="text-veneduca-light/80 text-sm">Carreras reconocidas por su calidad académica</p>
              </div>
              
              <div className="bg-veneduca-light/10 backdrop-blur-sm p-6 rounded-xl border border-veneduca-light/20 hover-lift mt-8">
                <Users className="h-8 w-8 text-veneduca-red mb-4" />
                <h3 className="text-veneduca-light font-semibold mb-2">Profesores Expertos</h3>
                <p className="text-veneduca-light/80 text-sm">Docentes con amplia experiencia profesional</p>
              </div>
              
              <div className="bg-veneduca-light/10 backdrop-blur-sm p-6 rounded-xl border border-veneduca-light/20 hover-lift">
                <Award className="h-8 w-8 text-veneduca-red mb-4" />
                <h3 className="text-veneduca-light font-semibold mb-2">Reconocimiento Internacional</h3>
                <p className="text-veneduca-light/80 text-sm">Títulos válidos a nivel nacional e internacional</p>
              </div>
              
              {/* Floating Element */}
              <div className="bg-veneduca-red/20 backdrop-blur-sm p-8 rounded-xl border border-veneduca-red/30 animate-float">
                <div className="text-center text-veneduca-light">
                  <div className="text-2xl font-bold mb-2">Tecnología</div>
                  <div className="text-sm opacity-90">Innovación Educativa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-veneduca-light">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;