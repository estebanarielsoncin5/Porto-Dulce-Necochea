
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Porto Dulce - Tortas Artesanales Hechas a Mano",
  description: "Tortas artesanales personalizadas por Marina Porto para cumpleaños, eventos y ocasiones especiales. Pedidos por WhatsApp.",
  icons: {
    icon: "/espiral.png",
    shortcut: "/espiral.png",
    apple: "/espiral.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      {children}
      <Toaster />
      <GlobalClientEffects />
    </>
  );

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {content}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
