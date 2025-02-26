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
        {/* Navbar Fixed at the Top */}
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-full max-w-[1400px] px-10 mx-auto">
            <Navbar />
          </div>
        </div>

        {/* Main Layout */}
        <div className="w-full h-full flex justify-center items-center pt-[10px]">
          <div className="w-full max-w-[1400px] px-10 mx-auto">
            <div className="bg-red-500 dark:bg-black min-h-screen mt-1 rounded-md relative overflow-hidden">
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

