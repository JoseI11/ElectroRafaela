import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import ScrollToTop from "./components/scrollToTop";
import FlowbiteProvider from "./components/flowbiteprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Electro Rafaela",
  description: "Catalogo de productos de venta",
  icons:{
    icon:"../assets/logo.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-fondo`}
      >
        <div className="relative top-0 flex justify-center items-center h-28 w-full">
          <Image alt="logo" src={logo} height={100} priority />
        </div>
        <ScrollToTop />
        <FlowbiteProvider>{children}</FlowbiteProvider>
      </body>
    </html>
  );
}
