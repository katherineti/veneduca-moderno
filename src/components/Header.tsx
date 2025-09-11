import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-veneduca-light shadow-soft sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-veneduca-dark text-veneduca-light py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              +58424158708
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              informacion@veneduca.edu.ve
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="h-4 w-4 hover:text-veneduca-red cursor-pointer transition-colors" />
            <Instagram className="h-4 w-4 hover:text-veneduca-red cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="bg-gradient-veneduca text-veneduca-light p-3 rounded-lg shadow-medium">
              <span className="text-2xl font-bold">VE</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-veneduca-dark">VenEduca</h1>
              <p className="text-sm text-veneduca-dark-gray">Universidad de Excelencia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-veneduca-dark hover:text-veneduca-red">
                  Universidad
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Nuestra Historia
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Misión y Visión
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Autoridades
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Servicios
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-veneduca-dark hover:text-veneduca-red">
                  Pregrado
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4">
                    <h4 className="text-veneduca-red font-semibold mb-2">Ingeniería</h4>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Ingeniería en Informática
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Ingeniería en Mantenimiento de Obras
                    </NavigationMenuLink>
                    <h4 className="text-veneduca-red font-semibold mt-4 mb-2">F.A.C.E.S</h4>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Administración de Empresas
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Contaduría Pública
                    </NavigationMenuLink>
                    <h4 className="text-veneduca-red font-semibold mt-4 mb-2">Humanidades</h4>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Educación Mención Inglés
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:bg-veneduca-gray p-2 rounded">
                      Publicidad
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Postgrados
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Diplomados y Cursos
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Noticias
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Revistas
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-veneduca-dark hover:text-veneduca-red cursor-pointer">
                  Apoyo al Estudiante
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button className="bg-veneduca-red hover:bg-veneduca-red/90 text-veneduca-light">
                  Contáctenos
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                Universidad <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
              <Button variant="ghost" className="justify-start">
                Servicios
              </Button>
              <Button variant="ghost" className="justify-start">
                Pregrado <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
              <Button variant="ghost" className="justify-start">
                Postgrados
              </Button>
              <Button variant="ghost" className="justify-start">
                Diplomados y Cursos
              </Button>
              <Button variant="ghost" className="justify-start">
                Noticias
              </Button>
              <Button variant="ghost" className="justify-start">
                Revistas
              </Button>
              <Button variant="ghost" className="justify-start">
                Apoyo al Estudiante
              </Button>
              <Button className="bg-veneduca-red hover:bg-veneduca-red/90 text-veneduca-light w-full">
                Contáctenos
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;