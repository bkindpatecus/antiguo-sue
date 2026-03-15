import heroImg from "@/assets/hero-restaurant.jpg";
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
      <div className="absolute inset-0 bg-background/70" />
      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="font-accent text-lg md:text-xl uppercase tracking-[0.3em] text-primary mb-6">
          Cajón del Maipo · El Manzano
        </p>
        <img 
          src={logo} 
          alt="Antiguo Sueño Restorán" 
          className="h-32 md:h-48 w-auto mx-auto mb-6 object-contain filter drop-shadow-lg" 
        />
        <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Disfruta buena comida, música y un ambiente mágico rodeado de naturaleza.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#menu")}
            className="px-8 py-4 bg-primary text-primary-foreground font-accent text-lg uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-colors duration-300 glow-warm"
          >
            Ver Menú
          </button>
          <button
            onClick={() => scrollTo("#reservas")}
            className="px-8 py-4 border border-primary text-primary font-accent text-lg uppercase tracking-widest rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
