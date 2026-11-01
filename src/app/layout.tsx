import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ExerciseProvider from "@/context/ExerciseContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitlog",
  description: "It helps people to track their exercises",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable}  h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-screen flex flex-col">
        <ExerciseProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <ToastContainer position="bottom-center" autoClose={2000} theme="light"/>
        </ExerciseProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
