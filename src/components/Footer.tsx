import logo from "@/assets/logo-antiguo-sueno.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <img src={logo} alt="Antiguo Sueño Restorán" className="h-16 w-auto mx-auto mb-3 object-contain" />
        <p className="font-body text-muted-foreground text-sm mb-2">
          Camino al Volcán 10860, El Manzano · Cajón del Maipo, Chile
        </p>
        <p className="font-body text-muted-foreground text-sm mb-6">
          +56 9 8790 0077
        </p>
        <p className="font-accent text-muted-foreground text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Antiguo Sueño Restorán · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
