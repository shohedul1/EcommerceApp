'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [serverRun, setServerRun] = useState(false);

  useEffect(() => {
    setServerRun(true); // Runs only once when the component mounts
  }, []);
  
  return (
    <>
      {serverRun && (
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
      )}
    </>
  );
};

export default Layout;

