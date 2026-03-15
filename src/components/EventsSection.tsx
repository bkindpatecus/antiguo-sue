import { PartyPopper, Heart, Music, Users, Gift } from "lucide-react";
import showBand from "@/assets/show-band.jpg";
import eventCake from "@/assets/event-wedding-cake.jpg";
import giftCardImg from "@/assets/gift-card.jpg";

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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.title} className="p-6 bg-muted/50 rounded-sm border border-border hover:border-primary/30 transition-colors duration-300">
                <e.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-sm">
              <img src={showBand} alt="Banda en vivo en Antiguo Sueño" className="w-full h-full object-cover min-h-[140px]" />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img src={eventCake} alt="Torta de matrimonio en evento" className="w-full h-full object-cover min-h-[140px]" />
            </div>
          </div>
        </div>

        {/* Gift Card Section */}
        <div className="bg-muted/50 rounded-sm border border-border p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <Gift className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Regala Experiencias</h3>
              <p className="font-body text-muted-foreground mb-3 text-lg">
                Consigue tu Gift Card de consumo en Antiguo Sueño.
              </p>
              <p className="font-body text-muted-foreground mb-6">
                Cárgala con el monto que desees. Canjeable en todo el año 2026.
              </p>
              <a
                href="https://wa.me/56987900077?text=Hola%2C%20quiero%20consultar%20por%20una%20Gift%20Card%20de%20Antiguo%20Sue%C3%B1o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-accent text-base uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-colors duration-300 glow-warm"
              >
                Pedir Gift Card
              </a>
            </div>
            <div className="overflow-hidden rounded-sm">
              <img src={giftCardImg} alt="Gift Card Antiguo Sueño" className="w-full h-auto rounded-sm" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
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
