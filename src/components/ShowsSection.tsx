import { useState } from "react";
import { ChevronLeft, ChevronRight, Music } from "lucide-react";
import showSinger from "@/assets/show-singer.jpg";
import showTrumpet from "@/assets/show-trumpet.jpg";
import showGuitar from "@/assets/show-guitar.jpg";
import showDuo from "@/assets/show-duo.jpg";
import showSoloGuitar from "@/assets/show-solo-guitar.jpg";
import showLosVasquez from "@/assets/show-los-vasquez.jpg";
import showAccordion from "@/assets/show-accordion.jpg";
import showAudience from "@/assets/show-audience.jpg";
import showGreenStage from "@/assets/show-green-stage.jpg";
import showMarimba from "@/assets/show-marimba.jpg";

const shows = [
  { src: showSinger, alt: "Cantante en vivo en Antiguo Sueño" },
  { src: showTrumpet, alt: "Trompetista en presentación en vivo" },
  { src: showGuitar, alt: "Guitarrista en escenario" },
  { src: showLosVasquez, alt: "Los Vásquez en concierto" },
  { src: showDuo, alt: "Dúo musical en vivo" },
  { src: showAccordion, alt: "Acordeonista en escenario" },
  { src: showMarimba, alt: "Artista de marimba" },
  { src: showSoloGuitar, alt: "Guitarrista solista" },
  { src: showGreenStage, alt: "Banda con iluminación verde" },
  { src: showAudience, alt: "Público disfrutando del show" },
];

const ShowsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % shows.length);
  const prev = () => setCurrent((prev) => (prev - 1 + shows.length) % shows.length);

  // Show 3 images at a time on desktop
  const getVisibleIndexes = () => {
    const indexes = [];
    for (let i = -1; i <= 1; i++) {
      indexes.push((current + i + shows.length) % shows.length);
    }
    return indexes;
  };

  const visible = getVisibleIndexes();

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Cada fin de semana</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Shows en Vivo</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
          <p className="font-body text-foreground/70 max-w-2xl mx-auto text-lg">
            Disfruta de música en vivo con artistas locales y bandas invitadas en un ambiente único al aire libre.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Mobile: single image */}
          <div className="md:hidden">
            <div className="aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src={shows[current].src}
                alt={shows[current].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Desktop: 3 images */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {visible.map((idx, i) => (
              <div
                key={idx}
                className={`aspect-[4/3] overflow-hidden rounded-sm transition-all duration-500 ${
                  i === 1 ? "scale-105 z-10 shadow-2xl ring-2 ring-primary/30" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img
                  src={shows[idx].src}
                  alt={shows[idx].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {shows.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-muted-foreground font-body">
            <Music className="w-5 h-5 text-primary" />
            <span>Síguenos en Instagram para conocer la programación semanal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
