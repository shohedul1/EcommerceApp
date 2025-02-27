'use client';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>

        {/* Main Layout */}
        <div className="w-full h-full relative flex justify-center items-center ">
          <div className="w-full max-w-[1400px] px-2 md:px-10 mx-auto">
            <Navbar />
            <div className="min-h-screen mt-1">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

      </NextThemesProvider>
    </>
  );
};

export default Layout;

