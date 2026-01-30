
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-[#FF5C8D]">
            Contacto
          </h2>
          <p className="text-lg text-[#FFC5D3] max-w-2xl mx-auto">
            Estamos para ayudarte con tu pedido
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-[#FFC5D3]">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://wa.me/5492262414148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#FFFFFF]">WhatsApp</p>
                    <p className="text-sm text-[#808080]">+54 9 2262 41-4148</p>
                  </div>
                </a>

                <a
                  href="tel:+5492262414148"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#FFFFFF]">Teléfono</p>
                    <p className="text-sm text-[#808080]">+54 9 2262 41-4148</p>
                  </div>
                </a>

                <a
                  href="mailto:portodulcenecochea@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#FFFFFF]">Email</p>
                    <p className="text-sm text-[#808080]">portodulcenecochea@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/portodulcenecochea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-pastel to-peach flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#FFFFFF]">Instagram</p>
                    <p className="text-sm text-[#808080]">@portodulcenecochea</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-[#FFC5D3]">
                  Zona de Cobertura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2 text-[#FFFFFF]">Retiro en local</p>
                    <p className="text-sm text-[#808080] mb-4">
                      Necochea, Buenos Aires
                    </p>
                    <p className="font-semibold mb-2 text-[#FFFFFF]">Delivery disponible</p>
                    <p className="text-sm text-[#808080]">
                      Consultá si llegamos a tu zona. Cobertura en Necochea y alrededores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
