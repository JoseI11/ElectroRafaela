import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import ScrollToTop from "./components/scroll-to-top";
import FlowbiteProvider from "./components/flowbite-provider";
import BackToHome from "./components/back-to-home";
import GridLayout from "./components/grid-layout";
import Header from "./components/header";
import Footer from "./components/footer";
import { CartProvider } from "./context/cart-context";

// import Path from "./components/path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Electro Rafaela | Catálogo de Productos Eléctricos",
    template: "%s | Electro Rafaela",
  },
  description: "Catálogo completo de productos eléctricos de Electro Rafaela. Encuentra contactores, guardamotores, disyuntores, térmicas, terminales y más. Calidad y precio en un solo lugar.",
  keywords: [
    "Electro Rafaela",
    "productos eléctricos",
    "contactores",
    "guardamotores",
    "disyuntores",
    "térmicas",
    "terminales",
    "materiales eléctricos",
    "ventas eléctricas",
    "Rafaela",
    "electricidad",
    "componentes eléctricos",
  ],
  metadataBase: new URL('https://www.electrorafaela.com.ar'), // Reemplaza con tu URL real
  openGraph: {
    title: "Electro Rafaela | Catálogo de Productos Eléctricos",
    description: "Catálogo completo de productos eléctricos de Electro Rafaela. Encuentra contactores, guardamotores, disyuntores, térmicas, terminales y más. Calidad y precio en un solo lugar.",
    url: "https://www.electrorafaela.com.ar", // Reemplaza con tu URL real
    siteName: "Electro Rafaela",
    images: [
      {
        url: "/assets/Schneider-Electric-Logo.webp", // Usa una imagen relevante para Open Graph
        width: 1536,
        height: 864,
        alt: "Logo de Electro Rafaela",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electro Rafaela | Catálogo de Productos Eléctricos",
    description: "Catálogo completo de productos eléctricos de Electro Rafaela. Encuentra contactores, guardamotores, disyuntores, térmicas, terminales y más. Calidad y precio en un solo lugar.",
    creator: "@ElectroRafaela", // Reemplaza con tu usuario de Twitter si tienes uno
    images: ["/assets/Schneider-Electric-Logo.webp"], // Misma imagen que Open Graph
  },
  icons: {
    icon: "/assets/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-fondo `}
      >
        <Header />
        <ScrollToTop />
        <FlowbiteProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </FlowbiteProvider>
        <Footer />
      </body>
    </html>
  );
}
