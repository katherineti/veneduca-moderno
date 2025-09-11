import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Wrench, Building, Calculator, Globe, GraduationCap } from "lucide-react";

const programs = [
  {
    id: "informatica",
    title: "Ingeniería en Informática",
    category: "Ingeniería",
    icon: Monitor,
    description: "Formamos profesionales capaces de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500",
    profile: "El ingeniero en informática de VenEduca es un profesional integral capaz de analizar, diseñar, desarrollar e implementar sistemas de información y soluciones tecnológicas que respondan a las necesidades del sector productivo y social.",
    workField: "Empresas de desarrollo de software, instituciones bancarias, empresas de telecomunicaciones, sector gubernamental, consultoría tecnológica, emprendimiento propio.",
    studyPlan: [
      { semester: 1, subjects: ["Matemática I", "Física I", "Introducción a la Ingeniería", "Programación I", "Inglés I"] },
      { semester: 2, subjects: ["Matemática II", "Física II", "Programación II", "Estructuras de Datos", "Inglés II"] },
      { semester: 3, subjects: ["Matemática III", "Base de Datos I", "Programación Orientada a Objetos", "Sistemas Operativos", "Electiva I"] },
      { semester: 4, subjects: ["Estadística", "Base de Datos II", "Ingeniería de Software", "Redes de Computadores", "Arquitectura de Computadores"] }
    ]
  },
  {
    id: "mantenimiento",
    title: "Ing. en Mantenimiento de Obras",
    category: "Ingeniería",
    icon: Wrench,
    description: "Especialistas en planificación, gestión y ejecución de estrategias de mantenimiento industrial.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500",
    profile: "Profesional especializado en la planificación, organización y control de actividades de mantenimiento preventivo, predictivo y correctivo en instalaciones industriales y civiles.",
    workField: "Industrias petroleras, petroquímicas, siderúrgicas, empresas de servicios, consultorías de mantenimiento, sector público.",
    studyPlan: [
      { semester: 1, subjects: ["Matemática I", "Física I", "Química General", "Dibujo Técnico", "Introducción al Mantenimiento"] },
      { semester: 2, subjects: ["Matemática II", "Física II", "Química Orgánica", "Mecánica", "Materiales de Ingeniería"] },
      { semester: 3, subjects: ["Matemática III", "Termodinámica", "Mecánica de Fluidos", "Resistencia de Materiales", "Electrotecnia"] },
      { semester: 4, subjects: ["Máquinas Eléctricas", "Mantenimiento Predictivo", "Vibración Mecánica", "Corrosión y Protección", "Instrumentación"] }
    ]
  },
  {
    id: "administracion",
    title: "Administración de Empresas",
    category: "F.A.C.E.S",
    icon: Building,
    description: "Líderes empresariales con visión estratégica y competencias gerenciales sólidas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    profile: "Profesional capacitado para planificar, organizar, dirigir y controlar los recursos organizacionales, con enfoque en la innovación y competitividad empresarial.",
    workField: "Empresas privadas, organizaciones públicas, consultorías empresariales, emprendimiento propio, ONGs, instituciones financieras.",
    studyPlan: [
      { semester: 1, subjects: ["Introducción a la Administración", "Matemática I", "Contabilidad I", "Economía I", "Comunicación Empresarial"] },
      { semester: 2, subjects: ["Administración I", "Matemática II", "Contabilidad II", "Economía II", "Estadística I"] },
      { semester: 3, subjects: ["Administración II", "Finanzas I", "Mercadeo I", "Recursos Humanos I", "Derecho Empresarial"] },
      { semester: 4, subjects: ["Administración Estratégica", "Finanzas II", "Mercadeo II", "Recursos Humanos II", "Operaciones I"] }
    ]
  },
  {
    id: "contaduria",
    title: "Contaduría Pública",
    category: "F.A.C.E.S",
    icon: Calculator,
    description: "Expertos en información financiera y sistemas contables para la toma de decisiones.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
    profile: "Contador público integral con competencias para generar, analizar e interpretar información financiera, cumpliendo con normativas nacionales e internacionales.",
    workField: "Empresas privadas, despachos contables, auditorías, sector público, consultoría fiscal, instituciones financieras.",
    studyPlan: [
      { semester: 1, subjects: ["Contabilidad I", "Matemática Financiera", "Economía I", "Introducción al Derecho", "Metodología de la Investigación"] },
      { semester: 2, subjects: ["Contabilidad II", "Estadística", "Economía II", "Derecho Mercantil", "Administración I"] },
      { semester: 3, subjects: ["Contabilidad III", "Costos I", "Finanzas I", "Derecho Tributario I", "Auditoría I"] },
      { semester: 4, subjects: ["Contabilidad IV", "Costos II", "Finanzas II", "Derecho Tributario II", "Auditoría II"] }
    ]
  },
  {
    id: "ingles",
    title: "Educación Mención Inglés",
    category: "Humanidades",
    icon: Globe,
    description: "Educadores especializados en la enseñanza del idioma inglés como lengua extranjera.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500",
    profile: "Docente especializado en la enseñanza del idioma inglés, con competencias pedagógicas y lingüísticas para formar estudiantes bilingües.",
    workField: "Instituciones educativas públicas y privadas, centros de idiomas, academias especializadas, educación virtual.",
    studyPlan: [
      { semester: 1, subjects: ["English I", "Pedagogía General", "Psicología Educativa", "Introducción a la Lingüística", "Metodología de la Investigación"] },
      { semester: 2, subjects: ["English II", "Didáctica General", "Psicología del Aprendizaje", "Fonética y Fonología", "Tecnología Educativa"] },
      { semester: 3, subjects: ["English III", "Didáctica del Inglés I", "Gramática Inglesa I", "Literatura Inglesa I", "Evaluación Educativa"] },
      { semester: 4, subjects: ["English IV", "Didáctica del Inglés II", "Gramática Inglesa II", "Literatura Inglesa II", "Práctica Profesional I"] }
    ]
  },
  {
    id: "publicidad",
    title: "Publicidad",
    category: "Humanidades",
    icon: GraduationCap,
    description: "Creativos estratégicos en comunicación publicitaria y marketing digital.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
    profile: "Profesional creativo capaz de desarrollar estrategias de comunicación publicitaria integral, con dominio de medios tradicionales y digitales.",
    workField: "Agencias de publicidad, medios de comunicación, empresas de marketing digital, departamentos de mercadeo, consultoría en comunicaciones.",
    studyPlan: [
      { semester: 1, subjects: ["Introducción a la Publicidad", "Comunicación Social", "Psicología del Consumidor", "Dibujo y Diseño I", "Redacción Publicitaria I"] },
      { semester: 2, subjects: ["Historia de la Publicidad", "Teorías de la Comunicación", "Sociología", "Dibujo y Diseño II", "Redacción Publicitaria II"] },
      { semester: 3, subjects: ["Estrategias Publicitarias", "Mercadeo I", "Creatividad Publicitaria", "Fotografía Publicitaria", "Medios Publicitarios"] },
      { semester: 4, subjects: ["Campañas Publicitarias", "Mercadeo II", "Producción Audiovisual", "Marketing Digital", "Investigación de Mercados"] }
    ]
  }
];

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  const categories = ["Todos", "Ingeniería", "F.A.C.E.S", "Humanidades"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPrograms = activeCategory === "Todos" 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <section className="py-20 bg-veneduca-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-veneduca-dark mb-6">
            Programas Académicos
          </h2>
          <p className="text-xl text-veneduca-dark-gray max-w-3xl mx-auto">
            Descubre nuestros programas de pregrado diseñados para formar profesionales 
            integrales con las competencias del siglo XXI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-veneduca-light p-2 rounded-xl shadow-soft">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeCategory === category
                    ? "bg-veneduca-red text-veneduca-light shadow-medium"
                    : "text-veneduca-dark hover:text-veneduca-red"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card
                key={program.id}
                className="group hover-lift bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all cursor-pointer"
                onClick={() => setSelectedProgram(program)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-veneduca rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-veneduca-light" />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-veneduca-red/10 text-veneduca-red rounded-full text-sm font-medium mb-4">
                      {program.category}
                    </span>
                    <h3 className="text-xl font-bold text-veneduca-dark mb-4 group-hover:text-veneduca-red transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-veneduca-dark-gray mb-6">
                      {program.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-veneduca-red text-veneduca-red hover:bg-veneduca-red hover:text-veneduca-light"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Program Details Modal */}
        <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProgram && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-veneduca-dark">
                    {selectedProgram.title}
                  </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Perfil de la Carrera</TabsTrigger>
                    <TabsTrigger value="work">Campo de Trabajo</TabsTrigger>
                    <TabsTrigger value="plan">Plan de Estudios</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile" className="mt-6">
                    <div className="space-y-4">
                      <img
                        src={selectedProgram.image}
                        alt={selectedProgram.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-veneduca-dark-gray leading-relaxed">
                        {selectedProgram.profile}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="work" className="mt-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-veneduca-dark">Áreas de Desempeño</h4>
                      <p className="text-veneduca-dark-gray leading-relaxed">
                        {selectedProgram.workField}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="plan" className="mt-6">
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-veneduca-dark">Plan de Estudios</h4>
                      <div className="grid gap-4">
                        {selectedProgram.studyPlan.map((semester) => (
                          <div
                            key={semester.semester}
                            className="bg-veneduca-gray p-4 rounded-lg"
                          >
                            <h5 className="font-semibold text-veneduca-red mb-3">
                              Semestre {semester.semester}
                            </h5>
                            <div className="grid md:grid-cols-2 gap-2">
                              {semester.subjects.map((subject, index) => (
                                <div
                                  key={index}
                                  className="text-sm text-veneduca-dark-gray bg-veneduca-light px-3 py-2 rounded"
                                >
                                  {subject}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProgramsSection;