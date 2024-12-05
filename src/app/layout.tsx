import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const glacialIndifference = localFont({
  src: "/fonts/GlacialIndifference-Regular.otf",
  variable: "--font-glacial-indifference",
  weight: "400 500 700 ",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feat Books",
  description: "Feat Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${glacialIndifference.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
