
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CreditCard, Package } from "lucide-react";

export default function OrderProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Elegir torta",
      description:
        "Elegí tu torta favorita o mandanos una foto de referencia por WhatsApp",
    },
    {
      icon: Calendar,
      title: "2. Confirmar fecha",
      description:
        "Coordinamos la fecha de entrega según disponibilidad (mínimo 3 días de anticipación)",
    },
    {
      icon: CreditCard,
      title: "3. Realizar pago",
      description:
        "Abonás una seña del 50% para confirmar tu pedido. El resto al retirar",
    },
    {
      icon: Package,
      title: "4. Retiro o entrega",
      description:
        "Retirás en nuestro local o coordinamos entrega a domicilio (consultar zona)",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/[Número]?text=Hola! Me gustaría encargar una torta",
      "_blank"
    );
  };

  return (
    <section id="encargar" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            ¿Cómo Encargar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y rápido en 4 pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-pastel to-peach flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Encargar Ahora
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Respondemos en menos de 2 horas
          </p>
        </div>
      </div>
    </section>
  );
}
