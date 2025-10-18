import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Cat } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center cursor-pointer"
            >
              <Link href="/">
                <Cat />
              </Link>
            </Button>

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              <Link href="/girisyap">Giriş Yap</Link>
            </Button>
            <Button>
              <Link href="/kayitol">Kayıt Ol</Link>
            </Button>
            {/* Eski SunIcon yerine yeni ThemeToggle bileşeni */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
