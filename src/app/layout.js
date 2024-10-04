import Nav from "@/app/components/Nav"
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer"


// import { SessionProvider } from "next-auth/react";
// import { ContextProvider } from "@/lib/context";
import "./globals.css";

const montserrat_thin_300 = Montserrat({ 
  subsets: ["latin"],
  weight: "300"
});



export const metadata= {
  title: "Sandberg Guesthouse",
  description: "Luxary Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_thin_300.className}>
        {/* <ContextProvider>
          <SessionProvider> */}
            <Nav/>
            {children}
            <Footer/>
          {/* </SessionProvider>
        </ContextProvider> */}
      </body>
    </html>
  );
}