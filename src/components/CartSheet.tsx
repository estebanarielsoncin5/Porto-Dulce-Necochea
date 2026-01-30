
"use client";

import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function CartSheet() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: ${item.price}\n\n`;
    });

    const total = getTotalPrice();
    message += `*Total estimado: $${total}*\n\n`;
    message += "¿Podrías confirmar disponibilidad y precio final?";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5492262414148?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Carrito de Compras
          </SheetTitle>
          <SheetDescription>
            {items.length === 0
              ? "Tu carrito está vacío"
              : `${items.length} producto${items.length !== 1 ? "s" : ""} en tu carrito`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground">
              Agrega productos desde nuestro catálogo
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg border bg-card"
                  >
                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {item.price}
                      </p>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total estimado:</span>
                <span className="text-primary">${getTotalPrice()}</span>
              </div>

              <p className="text-xs text-muted-foreground">
                * El precio final puede variar según personalización y tamaño
              </p>

              <div className="space-y-2">
                <Button
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white"
                  size="lg"
                  onClick={handleWhatsAppOrder}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar Pedido por WhatsApp
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
