import { useState } from "react";
import exteriorImg from "@/assets/gallery-exterior-night.jpg";
import interiorImg from "@/assets/interior-salon.jpg";
import { TreePine, Music, PartyPopper, Heart, ChevronDown, ChevronUp, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Heart, title: "Ambiente Familiar", desc: "Un espacio cálido y acogedor para disfrutar en familia." },
  { icon: Music, title: "Música en Vivo", desc: "Artistas locales algunos fines de semana." },
  { icon: PartyPopper, title: "Celebraciones", desc: "Espacio ideal para cumpleaños, matrimonios y eventos." },
  { icon: TreePine, title: "Naturaleza Pura", desc: "Rodeado del bosque y las montañas del Cajón del Maipo." },
];

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="restaurante" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Conócenos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Somos Antiguo Sueño</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />

          {/* Resumen */}
          <p className="font-body text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Nacimos el año 2000 como una tienda de antigüedades en el corazón del Cajón del Maipo. Con el tiempo, ese sueño creció y se transformó en un restorán familiar donde la gastronomía casera, la música en vivo desde nuestro icónico camión escenario y un ambiente rodeado de naturaleza se unen para crear experiencias inolvidables.
          </p>

          {/* Texto expandido */}
          {expanded && (
            <div className="max-w-3xl mx-auto mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Somos un emprendimiento familiar que comenzó como un pequeño local de antigüedades. Hoy, conservamos esa esencia en cada rincón de nuestra decoración: objetos únicos, iluminación cálida y un ambiente que invita a quedarse. Nuestro menú es de cocina casera, preparado con dedicación y cariño, ideal para compartir en familia o con amigos.
              </p>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Los fines de semana cobramos vida con música en vivo desde nuestro camión escenario, un sello que nos distingue. Además, contamos con un amplio patio al aire libre donde grandes y chicos pueden disfrutar del entorno natural del Cajón del Maipo.
              </p>

              {/* Nota mascotas */}
              <div className="flex items-center justify-center gap-3 mt-6 p-4 rounded-sm bg-primary/10 border border-primary/20 max-w-md mx-auto">
                <PawPrint className="w-6 h-6 text-primary shrink-0" />
                <p className="font-body text-foreground/80 text-sm text-left">
                  Somos <span className="font-semibold text-primary">pet friendly</span> — tu mascota también es bienvenida a disfrutar de este sueño.
                </p>
              </div>
            </div>
          )}

          {/* Botón expandir */}
          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-primary hover:text-primary/80 font-accent uppercase tracking-wider text-sm"
          >
            {expanded ? "Leer menos" : "Leer más"}
            {expanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
          </Button>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="overflow-hidden rounded-sm">
            <img src={exteriorImg} alt="Exterior del restaurante con luces cálidas al atardecer" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={interiorImg} alt="Salón rústico interior de Antiguo Sueño" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-sm bg-muted/50 border border-border hover:border-primary/30 transition-colors duration-300">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
