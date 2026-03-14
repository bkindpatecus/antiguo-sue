import interiorImg from "@/assets/gallery-interior.jpg";
import patioImg from "@/assets/gallery-patio.jpg";
import { TreePine, Music, PartyPopper, Heart } from "lucide-react";

const features = [
  { icon: Heart, title: "Ambiente Familiar", desc: "Un espacio cálido y acogedor para disfrutar en familia." },
  { icon: Music, title: "Música en Vivo", desc: "Artistas locales algunos fines de semana." },
  { icon: PartyPopper, title: "Celebraciones", desc: "Espacio ideal para cumpleaños, matrimonios y eventos." },
  { icon: TreePine, title: "Naturaleza Pura", desc: "Rodeado del bosque y las montañas del Cajón del Maipo." },
];

const AboutSection = () => {
  return (
    <section id="restaurante" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Conócenos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">El Restaurante</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
          <p className="font-body text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Un restaurante rústico y artístico con decoración de antigüedades, iluminación cálida y un amplio patio al aire libre rodeado de la naturaleza del Cajón del Maipo. Aquí el tiempo se detiene y cada visita se convierte en un recuerdo especial.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="overflow-hidden rounded-sm">
            <img src={interiorImg} alt="Interior rústico del restaurante con antigüedades" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img src={patioImg} alt="Patio exterior con luces y naturaleza" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
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
