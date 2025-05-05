import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Merch",
      url: "/",
    },
    {
      id: 3,
      name: "Tickets",
      url: "/",
    },
    {
      id: 4,
      name: "Contact",
      url: "/",
    },
  ];

  return (
    <header className="absolute inset-0 z-40 h-20 w-full flex items-center px-[20px] md:px-[40px]">
      <nav className="flex justify-between items-center w-full">
        <div>
          <Image
            src="/nav-logo.webp"
            alt="Beauty School Logo"
            height={40}
            width={40}
          />
        </div>
        <div>
          {navLinks.map(({ id, name, url }) => (
            <Link key={id} href={url} className="text-white pl-4">
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
