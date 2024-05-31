import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import variables from "./variables.module.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "PerfilJob",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className={variables.navbar}/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
