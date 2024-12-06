import type { Metadata } from "next";
import Navigation from "../components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Feat Books | Auth",
  description: "Feat Books | Auth",
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
