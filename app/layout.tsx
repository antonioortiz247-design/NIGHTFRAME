import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIGHTFRAME México — DROP_001 NO SIGNAL",
  description:
    "Lanzamiento premium de streetwear oversized en México: DROP_001 — NO SIGNAL, prendas limitadas inspiradas en cine neo-noir, VHS y transmisiones perdidas.",
  metadataBase: new URL("https://nightframe.vercel.app"),
  openGraph: {
    title: "NIGHTFRAME México — DROP_001 NO SIGNAL",
    description:
      "Streetwear oversized premium desde México, construido como un archivo cinematográfico perdido.",
    siteName: "NIGHTFRAME",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
