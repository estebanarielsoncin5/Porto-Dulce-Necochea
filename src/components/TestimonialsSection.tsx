
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  chatImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    chatImage: "/images/opinion1.jpg",
  },

  {
    id: 2,
    chatImage: "/images/opinion2.jpg",
  },

  {
    id: 3,
    chatImage: "/images/opinion3.jpg",
  },

  {
    id: 4,
    chatImage: "/images/opinion4.jpg",
  },

  {
    id: 5,
    chatImage: "/images/opinion5.jpg",
  },

    {
    id: 6,
    chatImage: "/images/opinion6.jpg",
  },
];

interface ChatCarouselProps {
  chatImage: string;
  onImageClick: () => void;
}

function ChatCarousel({ chatImage, onImageClick }: ChatCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const images = [chatImage];
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
      className="relative overflow-hidden aspect-[9/16] group bg-muted rounded-lg cursor-pointer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={onImageClick}
    >
      <img
        src={images[currentIndex]}
        alt="Chat de cliente"
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
              isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
              isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
  imageUrl: string;
  onClose: () => void;
}

function FullscreenModal({ isOpen, imageUrl, onClose }: FullscreenModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
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
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Chat de cliente en pantalla completa"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openFullscreen = (imageUrl: string) => {
    setFullscreenImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-[#FF5C8D]">
            Opiniones de Clientes
          </h2>
          <p className="text-lg text-[#FFC5D3] max-w-2xl mx-auto">
            Lo que dicen quienes ya probaron nuestras tortas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <ChatCarousel
                chatImage={testimonial.chatImage}
                onImageClick={() => openFullscreen(testimonial.chatImage)}
              />
            </Card>
          ))}
        </div>
      </div>

      <FullscreenModal
        isOpen={fullscreenImage !== null}
        imageUrl={fullscreenImage || ""}
        onClose={closeFullscreen}
      />
    </section>
  );
}