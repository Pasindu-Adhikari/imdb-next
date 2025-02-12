import { Inter } from "next/font/google";
import "./globals.css";
import Hedder from "@/components/Hedder";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Hedder />
          {children}
        </Providers>
        
        </body>
    </html>
  );
}
