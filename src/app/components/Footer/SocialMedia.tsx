import React from "react";
import Link from "next/link";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Youtube,
} from "lucide-react";

import Image from "next/image";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/featbooksglobal",
      lucide: true,
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/featbooksglobal",
      lucide: true,
    },
    {
      icon: () => (
        <Image src={"/tiktok.png"} alt="Tiktok" width={20} height={20} />
      ),
      href: "https://www.tiktok.com/@featbooksglobal?lang=en",
      lucide: false,
    },
    { icon: TwitterIcon, href: "https://x.com/featbooksglobal", lucide: true },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@featbooksglobal",
      lucide: true,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-start items-center pt-8 border-t border-black/10">
      <h1 className="text-sm font-semibold">Follow us: </h1>
      <div className="flex gap-4">
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-black/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.lucide ? <link.icon size={20} /> : <link.icon />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
