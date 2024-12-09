import type { Metadata } from "next";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Feat Books | About",
  description: "Feat Books | About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="">
        <Navigation />
      </div>
      {children}
    </div>
  );
}
