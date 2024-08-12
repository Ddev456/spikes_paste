"use client";

import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { navItems } from "./Navbar";
import Link from "next/link";

export const Searchbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Command>
        <CommandInput
        className=""
          onClick={() => setOpen(true)}
          placeholder="Search for specific components, sections, wireframes, and more..."
        />
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search for specific components, sections, wireframes, and more..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              { navItems.map(
                (item) => (
                  <CommandItem><Link className="w-full" href={item.href}>{item.name}</Link></CommandItem>
                )
              ) }
              </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Command>
    </>
  );
};
