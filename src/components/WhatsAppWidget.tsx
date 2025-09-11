import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    const phoneNumber = "584241587708"; // VenEduca phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickMessages = [
    "Hola, me gustaría información sobre los programas de pregrado",
    "¿Cuáles son los requisitos de admisión?",
    "¿Qué modalidades de estudio manejan?",
    "Necesito información sobre costos y becas",
  ];

  return (
    <>
      {/* Chat Button */}
      <Button
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-strong animate-bounce ${
          isOpen ? 'scale-0' : 'scale-100'
        } transition-all duration-300`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 animate-scale-in">
          <Card className="shadow-strong border-0">
            <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">VenEduca</h4>
                    <p className="text-sm opacity-90">¿En qué podemos ayudarte?</p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 space-y-4 max-h-80 overflow-y-auto">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  ¡Hola! 👋 Bienvenido a VenEduca. Selecciona una opción o escríbenos directamente:
                </p>
              </div>
              
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left h-auto p-3 text-xs justify-start hover:bg-green-50 hover:border-green-200"
                    onClick={() => handleSendMessage(message)}
                  >
                    {message}
                  </Button>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleSendMessage("Hola, necesito información sobre VenEduca")}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Iniciar Conversación
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;