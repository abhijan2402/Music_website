import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const NAVLINKS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
  ];

  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const handleNavigate = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="flex h-14 max-w-7xl mx-auto justify-between items-center gap-4 px-4 lg:h-[60px] z-50 lg:px-6">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={handleNavigate} // Close the sheet on navigation
            >
              <Music className="h-6 w-6" />
            </Link>
            {NAVLINKS.map((link, i) => (
              <Link
                key={i} // Add a unique key to each link
                to={link.href}
                className={cn(
                  isActive(link.href)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground",
                  "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
                )}
                onClick={handleNavigate} // Close the sheet on navigation
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="">
        <Link to="/" className="flex gap-2 ">
          <span className="md:text-3  xl text-2xl font-bold bg-gradient-to-r from-[#F85D5E] to-[#9A26A3] bg-clip-text text-transparent">
            VenusSound
          </span>
        </Link>
      </div>

      <div className="block md:hidden">

      </div>

      <div className="hidden md:flex gap-12">
        {NAVLINKS?.map((link, i) => (
          <Link
            key={i}
            to={link.href}
            className={cn(
              isActive(link.href)
                ? "text-foreground border-b-2 dark:border-white border-black"
                : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
