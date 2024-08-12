'use client';

import { Logo } from "@/app/assets/icons/Logo";
import Link from "next/link";
import { Searchbar } from "./Searchbar";
import { Separator } from "./ui/separator";
import { UserMenu } from "./UserMenu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { MobileLogo } from "@/app/assets/icons/MobileLogo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Library", href: "/library" },
  { name: "Extension", href: "#" },
  { name: "Community", href: "#" },
  { name: "Membership", href: "#" },
];

export const Navbar = () => {
  const activeLink = usePathname();

  return (
    <nav className="w-full flex items-center justify-between p-8 gap-8">
      <Link href="/" className="flex items-center">
        <Logo />
        <MobileLogo />
        <span className="sr-only ml-3 text-xl font-bold">Paste</span>
      </Link>
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <div className="hidden lg:flex md:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(item.href === activeLink ? "bg-[#1D1D1D]" : null ,"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")}
          >
            {item.name}
          </Link>
        ))}
      </div>
        <Sheet>
        <SheetTrigger className="flex lg:hidden"><Menu className="h-6 w-6 stroke-white" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-white">Navigation</SheetTitle>
      <SheetDescription className="flex flex-col gap-2">
      {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {item.name}
          </Link>
        ))}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <Searchbar />
      <Separator orientation="vertical" className="h-[24px] bg-[#1D1D1D]" />
      <UserMenu />
    </nav>
  );
};
