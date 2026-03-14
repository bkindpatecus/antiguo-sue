import { PartyPopper, Heart, Music, Users } from "lucide-react";
import galleryMusic from "@/assets/gallery-music.jpg";

const events = [
  { icon: PartyPopper, title: "Cumpleaños", desc: "Celebra tu día especial en un entorno único rodeado de naturaleza y con atención personalizada." },
  { icon: Heart, title: "Matrimonios", desc: "Un escenario mágico con montañas de fondo para el día más importante de tu vida." },
  { icon: Users, title: "Eventos Privados", desc: "Reuniones corporativas, cenas privadas y celebraciones íntimas con menú especial." },
  { icon: Music, title: "Música en Vivo", desc: "Artistas locales y bandas en vivo para disfrutar al aire libre los fines de semana." },
];

const EventsSection = () => {
  return (
    <section id="eventos" className="section-padding bg-card relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Celebra con nosotros</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Eventos</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
          <p className="font-body text-foreground/70 max-w-2xl mx-auto text-lg">
            Antiguo Sueño es el lugar perfecto para celebrar tus momentos más especiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.title} className="p-6 bg-muted/50 rounded-sm border border-border hover:border-primary/30 transition-colors duration-300">
                <e.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={galleryMusic} alt="Evento de música en vivo" className="w-full h-full object-cover min-h-[300px]" />
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/56987900077?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20por%20un%20evento%20en%20Antiguo%20Sue%C3%B1o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-accent text-lg uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-colors duration-300 glow-warm"
          >
            Consultar por Evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
