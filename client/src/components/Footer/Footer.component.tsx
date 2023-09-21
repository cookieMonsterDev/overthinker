import React from "react";
import Link from "next/link";

const Links = [
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Terms",
    href: "/terms",
  },
  {
    text: "Help",
    href: "/help",
  },
];

export const FooterComponent = () => {
  return (
    <footer className="container h-16 bg-secondary p-6 flex justify-center gap-6 border-t-1">
      {Links.map((e) => (
        <Link
          key={e.href}
          href={e.href}
          className="text-base font-normal text-[rgba(0, 0, 0, 0.4)] hover:text-primary duration-300"
        >
          {e.text}
        </Link>
      ))}
    </footer>
  );
};
