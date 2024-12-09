import type { Metadata } from "next";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Feat Books | Services",
  description: "Feat Books | Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="pr-4">
        <Navigation />
      </div>
      {children}
    </div>
  );
}
