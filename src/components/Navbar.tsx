import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-antiguo-sueno.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Restaurante", href: "#restaurante" },
  { label: "Menú", href: "#menu" },
  { label: "Shows", href: "#shows" },
  { label: "Galería", href: "#galeria" },
  { label: "Eventos", href: "#eventos" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6 md:py-2 md:px-4">
        <button onClick={() => handleClick("#inicio")} className="flex items-center ml-2 md:ml-0 mt-1 md:mt-0">
          <img
            src={logo}
            alt="Antiguo Sueño Restorán"
            className={`transition-all duration-500 object-contain ${
              scrolled ? "h-28 md:h-36" : "h-32 md:h-56"
            }`}
          />
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="font-accent text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 60 }}
      >
        {/* Close button inside overlay */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-foreground p-2"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 pt-4">
          <img src={logo} alt="Antiguo Sueño" className="h-20 object-contain mb-4" />
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="font-accent text-xl uppercase tracking-widest text-foreground/80 hover:text-primary active:text-primary transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
