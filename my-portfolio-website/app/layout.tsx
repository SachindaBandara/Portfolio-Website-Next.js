import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
//import ThemeSwitch from "@/components/theme-switch";
//import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sachinda Bandara",
  description:
    "Sachinda Bandara is an undergraduate at Sabaragamuwa University of Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}
      bg-slate-950 text-slate-50 relative h-[5000px] pt-28 sm:pt-36 `}
      >
        <div className="bg-[#fbe2e300] absolute top-[-6rem] -z-10 right-[20rem] h-[20rem] w-[22rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb00] absolute top-[-1rem] -z-10 left-[-35rem] h-[20rem] w-[22rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
