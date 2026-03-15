import { useState } from "react";
import petFriendlyImg from "@/assets/pet-friendly.jpg";
import exteriorSnowImg from "@/assets/exterior-snow-sign.jpg";
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
            Rememorando sus inicios como tienda de antigüedades (año 2000) a manos de Ángela Roa, el Antiguo Sueño ahora como restorán y trabajado por la familia, deja ver en cada rincón su origen.
          </p>

          {/* Texto expandido */}
          {expanded && (
            <div className="max-w-3xl mx-auto mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Ubicado en las montañas del Cajón del Maipo, en la localidad de El Manzano, el Antiguo Sueño fomenta en un lugar familiar y acogedor, la gastronomía y el comercio local.
              </p>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Recibiendo a sus clientes a la sombra de sus árboles con una carta de productos frescos y de la zona, siendo amenizados además, por variados espectáculos de música, que desde el camión escenario y bajo un imponente sauce, entretienen a nuestros invitados.
              </p>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                Destaca así la elaboración casera de platos, masas y postres, que junto a un café recién molido, marcan un excelente punto final a su experiencia.
              </p>

              {/* Nota mascotas */}
              <div className="flex items-start justify-center gap-3 mt-6 p-4 rounded-sm bg-primary/10 border border-primary/20 max-w-lg mx-auto">
                <PawPrint className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-foreground/80 text-sm text-left">
                  Antiguo Sueño da la bienvenida a todas las mascotas, pero siempre teniendo en cuenta que es un lugar público con niños. Así que, cuida a tu mascota, mantenla junto a ti y disfruta.
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
            <img src={exteriorSnowImg} alt="Antiguo Sueño nevado con letrero" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={petFriendlyImg} alt="Mascota disfrutando en el patio de Antiguo Sueño" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
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
