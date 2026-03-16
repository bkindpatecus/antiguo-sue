import { useState } from "react";
import { ChevronLeft, ChevronRight, Music, Calendar, Clock, Tag } from "lucide-react";
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

import showBototaFox from "@/assets/show-botota-fox.jpg";

const upcomingShows = [
  { date: "21", month: "MAR", day: "Sábado", time: "21:00", artist: "Botota Fox", genre: "Stand Up Comedy", description: "La Fiebre Soy Yo — Stand Up Comedy con Botota Fox. Entrada: $20.000. Cupos limitados. Reservas al +569 8790 0077.", image: showBototaFox },
  { date: "?", month: "???", day: "", time: "", artist: "Próximamente...", genre: "Sorpresa", description: "Algo grande se viene. Mantente atento a nuestras redes para el anuncio.", mystery: true },
  { date: "?", month: "???", day: "", time: "", artist: "Próximamente...", genre: "Sorpresa", description: "Una noche que no te querrás perder. Pronto revelaremos los detalles.", mystery: true },
];

const ShowsSection = () => {
  const [current, setCurrent] = useState(0);
  const [expandedShow, setExpandedShow] = useState<number | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % shows.length);
  const prev = () => setCurrent((prev) => (prev - 1 + shows.length) % shows.length);

  const getVisibleIndexes = () => {
    const indexes = [];
    for (let i = -1; i <= 1; i++) {
      indexes.push((current + i + shows.length) % shows.length);
    }
    return indexes;
  };

  const visible = getVisibleIndexes();

  return (
    <section id="shows" className="section-padding bg-background overflow-hidden">
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
          <div className="md:hidden">
            <div className="aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src={shows[current].src}
                alt={shows[current].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

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

        {/* Upcoming Shows - Cartelera */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-3">Programación</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Próximos Shows</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {upcomingShows.map((show, i) => (
              <div
                key={i}
                className={`group text-left border rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${
                  show.image ? "border-primary/50 bg-card" : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {/* Show image - fills all available space above info */}
                {show.image && (
                  <div className="overflow-hidden">
                    <img src={show.image} alt={show.artist} className="w-full object-cover object-top" />
                  </div>
                )}

                <div className="p-6">
                  {/* Date block */}
                  <button
                    onClick={() => setExpandedShow(expandedShow === i ? null : i)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-center min-w-[3.5rem]">
                        <span className="block font-display text-3xl font-bold text-primary leading-none">{show.date}</span>
                        <span className="block font-accent text-xs uppercase tracking-widest text-primary/80 mt-1">{show.month}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-display text-lg font-semibold group-hover:text-primary transition-colors ${
                          show.artist === "Próximamente..." ? "text-primary/60 italic" : "text-foreground"
                        }`}>
                          {show.artist}
                        </p>
                        <p className="text-muted-foreground text-sm">{show.day}</p>
                      </div>
                    </div>

                    {/* Details */}
                    {!show.mystery && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {show.time}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5" />
                          {show.genre}
                        </span>
                      </div>
                    )}

                    {/* Expanded description */}
                    {expandedShow === i && (
                      <p className="mt-4 pt-4 border-t border-border text-sm text-foreground/70 font-body animate-in fade-in slide-in-from-top-2 duration-300">
                        {show.description}
                      </p>
                    )}
                  </button>

                  {/* WhatsApp reserve button for Botota Fox */}
                  {show.image && (
                    <a
                      href="https://wa.me/56987900077?text=Hola%2C%20quiero%20reservar%20para%20el%20show%20de%20Botota%20Fox%20el%2021%20de%20marzo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-accent text-sm uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors duration-300 glow-warm"
                    >
                      Reservar por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
