
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import ScrollToTop from "./components/scroll-to-top";
import FlowbiteProvider from "./components/flowbite-provider";
import BackToHome from "./components/back-to-home";
import GridLayout from "./components/grid-layout";


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
  title: "Electro Rafaela",
  description: "Catalogo de productos de venta",
  icons: {
    icon: "../assets/logo.ico",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-fondo `}
      > 
      
        <GridLayout>
          <div className="flex justify-center items-center w-32 space-y-3 sm:w-44 md:w-48">

            {/*  <Path/> */}

            <BackToHome />
            {/* <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400">
              Volver al inicio
            </Link> */}
          </div>
          <div className="flex justify-center items-center ">
            <Image alt="logo" src={logo} height={100} priority />
          </div>
        </GridLayout>
        <ScrollToTop />
        <FlowbiteProvider>{children}</FlowbiteProvider>
      </body>
    </html>
  );
}
