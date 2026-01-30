
"use client";

import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700 text-[#FF5C8D]">
            Tortas artesanales
          </h1>
          <p className="text-xl md:text-2xl text-[#FFC5D3] mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Pedidos personalizados para cumpleaños, eventos y ocasiones
            especiales
          </p>
          <p className="text-lg font-semibold animate-in fade-in slide-in-from-bottom duration-700 delay-300 text-[#FF5C8D]">
              Explorá nuestro catálogo y agregá tus tortas favoritas al carrito 🛒
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-sm text-[#FF5C8D] font-medium">Desliza hacia abajo</p>
        <ChevronDown className="w-6 h-6 text-[#FF5C8D] animate-bounce" />
      </div>
    </section>
  );
}
