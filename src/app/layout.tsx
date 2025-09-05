import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBLK",
  description:
    "Magical Blocks ($MBLK) is the ERC20 utility token for Legends of Bezogia, offering players and investors a unique opportunity to be a part of the future of gaming and blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="relative container mx-auto">
            <Navbar />
          </div>
          <div className="mt-5">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
