import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const academicPrograms = [
    "Ingeniería en Informática",
    "Ing. en Mantenimiento de Obras", 
    "Administración de Empresas",
    "Contaduría Pública",
    "Educación Mención Inglés",
    "Publicidad"
  ];

  const quickLinks = [
    "Nuestra Universidad",
    "Admisiones",
    "Biblioteca Virtual",
    "Campus Virtual",
    "Calendario Académico",
    "Reglamentos"
  ];

  return (
    <footer className="bg-veneduca-dark text-veneduca-light relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* University Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-veneduca p-3 rounded-lg">
                <span className="text-2xl font-bold">VE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">VenEduca</h3>
                <p className="text-veneduca-light/70">Universidad de Excelencia</p>
              </div>
            </div>
            
            <p className="text-veneduca-light/80 leading-relaxed max-w-md">
              Formamos profesionales integrales con más de 25 años de experiencia 
              en educación superior de calidad, comprometidos con el desarrollo 
              sostenible de Venezuela.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-veneduca-light/80">
                <MapPin className="h-5 w-5 text-veneduca-red flex-shrink-0" />
                <span className="text-sm">Plaza Venezuela, Caracas - El Trigal, Valencia</span>
              </div>
              <div className="flex items-center space-x-3 text-veneduca-light/80">
                <Phone className="h-5 w-5 text-veneduca-red flex-shrink-0" />
                <span className="text-sm">+58 424 158 7708</span>
              </div>
              <div className="flex items-center space-x-3 text-veneduca-light/80">
                <Mail className="h-5 w-5 text-veneduca-red flex-shrink-0" />
                <span className="text-sm">informacion@veneduca.edu.ve</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <Button
                size="icon"
                variant="outline"
                className="border-veneduca-light/20 text-veneduca-light hover:bg-veneduca-red hover:border-veneduca-red"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-veneduca-light/20 text-veneduca-light hover:bg-veneduca-red hover:border-veneduca-red"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline" 
                className="border-veneduca-light/20 text-veneduca-light hover:bg-veneduca-red hover:border-veneduca-red"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-veneduca-light/20 text-veneduca-light hover:bg-veneduca-red hover:border-veneduca-red"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-bold text-veneduca-red mb-6">Programas Académicos</h4>
            <ul className="space-y-3">
              {academicPrograms.map((program, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-veneduca-light/70 hover:text-veneduca-red transition-colors text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-veneduca-red mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-veneduca-light/70 hover:text-veneduca-red transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-veneduca-light font-semibold mb-3 text-sm">Newsletter</h5>
              <p className="text-xs text-veneduca-light/60 mb-4">
                Recibe noticias y actualizaciones de VenEduca
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-veneduca-light/10 border border-veneduca-light/20 rounded text-sm text-veneduca-light placeholder:text-veneduca-light/50"
                />
                <Button size="sm" className="bg-veneduca-red hover:bg-veneduca-red/90">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-veneduca-light/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-veneduca-light/60">
              © 2024 VenEduca - Universidad de Excelencia. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-veneduca-light/60 hover:text-veneduca-red transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-veneduca-light/60 hover:text-veneduca-red transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-veneduca-light/60 hover:text-veneduca-red transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-24 right-24 w-12 h-12 rounded-full bg-veneduca-red hover:bg-veneduca-red/90 shadow-strong z-40 opacity-80 hover:opacity-100 transition-all"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;