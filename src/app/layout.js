import { Roboto } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./layout.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Home Page",
  description: "PerfilJob",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <main>
          <div className="main">
          {children}
          </div>
        <Footer/>
        </main>
      </body>
    </html>
  );
}