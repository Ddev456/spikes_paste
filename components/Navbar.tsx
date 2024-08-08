import { Logo } from "@/app/assets/icons/Logo";
import Link from "next/link";
import { Searchbar } from "./Searchbar";
import { Separator } from "./ui/separator";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  const navItems = [
    { name: "Library", href: "#" },
    { name: "Extension", href: "#" },
    { name: "Community", href: "#" },
    { name: "Membership", href: "#" },
  ];
  return (
    <nav className="w-full flex items-center justify-between p-8 gap-8">
      <div className="flex items-center">
        <Logo />
        <span className="sr-only ml-3 text-xl font-bold">Paste</span>
      </div>
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <div className="hidden md:flex md:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <Searchbar />
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <UserMenu />
    </nav>
  );
};
