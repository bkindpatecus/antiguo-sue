import heroImg from "@/assets/hero-bus-snow.jpg";
import logo from "@/assets/logo-antiguo-sueno.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />
      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up pt-20 md:pt-0">
        
        <p className="font-accent text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/90 mb-3 md:mb-4">
          Gastronomía · Música · Mascotas
        </p>
        <p className="font-accent text-base md:text-2xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/80 mb-8 md:mb-10">
          ABIERTO TODOS LOS DÍAS
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <button
            onClick={() => scrollTo("#menu")}
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-primary text-primary-foreground font-accent text-base md:text-lg uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-colors duration-300 glow-warm"
          >
            Ver Menú
          </button>
          <button
            onClick={() => scrollTo("#reservas")}
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 border border-primary text-primary font-accent text-base md:text-lg uppercase tracking-widest rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
