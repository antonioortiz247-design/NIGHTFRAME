import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIGHTFRAME — Lost Frames From A Film That Never Existed",
  description:
    "A premium cinematic streetwear landing page for NIGHTFRAME: neo-noir apparel, VHS archives, midnight transmissions, and editorial fashion fragments.",
  metadataBase: new URL("https://nightframe.vercel.app"),
  openGraph: {
    title: "NIGHTFRAME — DROP_001 NO SIGNAL",
    description:
      "Luxury cinematic streetwear mixed with a lost sci-fi film archive.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
