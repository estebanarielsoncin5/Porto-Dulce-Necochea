
"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";

interface Cake {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  popular?: boolean;
}

const cakes: Cake[] = [
  {
    id: 1,
    name: "Torta 80 Golpes Clásica",
    description: "Un clásico irresistible de la repostería argentina. La Torta 80 Golpes combina capas suaves de bizcochuelo con un toque justo de dulzura y una textura húmeda y esponjosa. Su sabor casero y su aroma inconfundible la convierten en la elección perfecta para acompañar un café o celebrar cualquier ocasión especial.",
    price: "$15000",
    images: [
      "/images/torta80golpes8.jpg",
      "/images/torta80golpes7.jpg",
      "/images/torta80golpes6.jpg",
      "/images/torta80golpes5.jpg",
      "/images/torta80golpes4.jpg",
      "/images/torta80golpes3.jpg",
      "/images/torta80golpes2.jpg",
      "/images/torta80golpes1.jpg",
    ],
  },

  {
    id: 2,
    name: "Torta Matera Marmolada",
    description: "Una deliciosa combinación de vainilla y cacao en un bizcochuelo esponjoso y húmedo. La Torta Matera Marmolada es ideal para acompañar el mate, el café o una merienda en familia. Su sabor equilibrado y su aspecto marmolado la convierten en un clásico infaltable en cualquier mesa.",
    price: "$10000",
    images: [
      "/images/tortamateramarmolada3.jpg",
      "/images/tortamateramarmolada2.jpg",
      "/images/tortamateramarmolada1.jpg",
    ],
  },

  {
    id: 3,
    name: "Torta Matera con Chips de Chocolate",
    description: "Suave, esponjosa y con el toque irresistible del chocolate. Esta torta matera combina la textura casera de un bizcochuelo tradicional con deliciosos chips que se derriten en cada bocado. Perfecta para acompañar el mate, el café o disfrutar en cualquier momento del día.",
    price: "$10000",
    images: [
      "/images/tortamaterachips3.jpg",
      "/images/tortamaterachips2.jpg",
      "/images/tortamaterachips1.jpg",
    ],
  },

  {
    id: 4,
    name: "Torta Matera de Limón o Naranja",
    description: "Fresca, esponjosa y con el aroma cítrico que enamora. Nuestra torta matera de limón o naranja ofrece un sabor suave y natural, ideal para acompañar el mate o una infusión. Un clásico casero que aporta un toque de frescura a cada merienda.",
    price: "$10000",
    images: [
      "/images/tortamateralimonnaranja1.jpg",
      "/images/tortamateralimonnaranja2.jpg",
      "/images/tortamateralimonnaranja3.jpg",
    ],
  },

  {
    id: 5,
    name: "Tortas Personalizadas",
    description: "Convertí tus ideas en una torta única. Diseñamos tortas totalmente personalizadas para cumpleaños, aniversarios, eventos o cualquier ocasión especial. Elegí los sabores, colores y decoración que más te gusten, y nosotros nos encargamos de crear una torta deliciosa y hecha a tu medida.",
    price: "$20000 x kilo",
    images: [
      "/images/tortapersonalizada1.jpg",
      "/images/tortapersonalizada2.jpg",
      "/images/tortapersonalizada3.jpg",
    ],
  },

  {
    id: 6,
    name: "Chocotorta Infantil (con golosinas a elección)",
    description: "La chocotorta es un clásico irresistible: capas de galletitas de chocolate humedecidas con café, intercaladas con una suave crema de dulce de leche y queso crema. Fresca y deliciosa, es la opción perfecta para los amantes del chocolate que buscan un postre casero, práctico y lleno de sabor. Ideal para cualquier celebración o antojo dulce.",
    price: "$20000 x kilo",
    images: [
      "/images/chocotorta1.jpg",
      "/images/chocotorta2.jpg",
      "/images/chocotorta3.jpg",
    ],
  },

  {
    id: 7,
    name: "Torta Golosinera (con golosinas a elección)",
    description: "Una torta pensada para fanáticos del chocolate. Base húmeda y bien cargada, cubierta con abundante chocolate con leche y chocolate blanco, decorada con Rocklets, bombones y golosinas irresistibles. Cada porción es una explosión de sabor, color y textura. Ideal para cumpleaños, festejos o para darse un gusto sin culpas.",
    price: "$20000 x kilo",
    images: [
      "/images/tortagolosinera1.jpeg",
      "/images/tortagolosinera2.jpeg",
      "/images/tortagolosinera3.jpeg",
    ],
  },

  {
    id: 8,
    name: "Torta 80 Golpes de Membrillo",
    description: "Nuestra clásica Torta 80 Golpes rellena con dulce de membrillo es una verdadera tentación para los amantes de lo tradicional. Masa suave, esponjosa y delicadamente hojaldrada, trabajada golpe a golpe para lograr su textura única, combinada con un generoso relleno de membrillo que aporta el equilibrio perfecto entre dulzura y sabor. Ideal para acompañar el mate, el café o para disfrutar en cualquier momento del día.",
    price: "$18000",
    images: [
      "/images/torta80golpes_membrillo_1.jpg",
    ],
  },

  {
    id: 9,
    name: "Pastafrola de Membrillo, Batata o Dulce de leche",
    description: "Clásica, casera y llena de sabor. Nuestra torta pastafrola está hecha con una masa suave y dorada, rellena con abundante dulce membrillo, batata, dulce de leche (según tu elección) y decorada con el tradicional enrejado que la hace irresistible. Ideal para acompañar el mate, el café o para disfrutar en cualquier momento del día. Elaborada con ingredientes de primera calidad y mucho amor, como hecha en casa.",
    price: "$15000",
    images: [
      "/images/pastafrola1.jpg",
    ],
  },
];

interface CarouselProps {
  images: string[];
  cakeName: string;
  onImageClick: (imageIndex: number) => void;
}

function ImageCarousel({ images, cakeName, onImageClick }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative overflow-hidden aspect-square group cursor-pointer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={() => onImageClick(currentIndex)}
    >
      <img
        src={images[currentIndex]}
        alt={`${cakeName} - imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-opacity duration-300 z-10 ${
              isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white transition-opacity duration-300 z-10 ${
              isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 w-2 hover:bg-white/75"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface FullscreenModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex: number;
  cakeName: string;
  onClose: () => void;
}

function FullscreenModal({ isOpen, images, initialIndex, cakeName, onClose }: FullscreenModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white z-10"
      >
        <X className="h-6 w-6" />
      </Button>

      <div
        className="relative w-full h-full flex items-center justify-center px-4 md:px-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${cakeName} - imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white h-12 w-12"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white h-12 w-12"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-4 py-2 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 w-2 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function CatalogSection() {
  const [fullscreenData, setFullscreenData] = useState<{
    images: string[];
    initialIndex: number;
    cakeName: string;
  } | null>(null);

  const { addItem } = useCart();

  const openFullscreen = (cake: Cake, imageIndex: number) => {
    setFullscreenData({
      images: cake.images,
      initialIndex: imageIndex,
      cakeName: cake.name,
    });
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenData(null);
    document.body.style.overflow = "unset";
  };

  const handleAddToCart = (cake: Cake) => {
    addItem({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      image: cake.images[0],
    });
  };

  return (
    <section id="tortas" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-[#FF5C8D]">
            Nuestras Tortas
          </h2>
          <p className="text-lg text-[#FFC5D3] max-w-2xl mx-auto">
            Cada torta es única y hecha con ingredientes de primera calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <Card
              key={cake.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <ImageCarousel 
                images={cake.images} 
                cakeName={cake.name}
                onImageClick={(imageIndex) => openFullscreen(cake, imageIndex)}
              />
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-playfair font-semibold text-[#FFC5D3]">
                    {cake.name}
                  </h3>
                  {cake.popular && (
                    <Badge className="bg-pink-pastel text-white whitespace-nowrap">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-[#808080] mb-3">
                  {cake.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-lg font-semibold text-[#FFC5D3]">
                    {cake.price}
                  </p>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(cake)}
                    className="bg-gradient-to-r from-pink-pastel to-peach hover:opacity-90"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Agregar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {fullscreenData && (
        <FullscreenModal
          isOpen={true}
          images={fullscreenData.images}
          initialIndex={fullscreenData.initialIndex}
          cakeName={fullscreenData.cakeName}
          onClose={closeFullscreen}
        />
      )}
    </section>
  );
}
