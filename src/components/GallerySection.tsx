import { useState } from "react";
import { X } from "lucide-react";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";

const images = [
  { src: galleryPatio, alt: "Patio exterior con luces cálidas" },
  { src: dish1, alt: "Plato gourmet del restaurante" },
  { src: galleryInterior, alt: "Interior con decoración de antigüedades" },
  { src: galleryNature, alt: "Paisaje del Cajón del Maipo" },
  { src: galleryMusic, alt: "Música en vivo al atardecer" },
  { src: dish2, alt: "Pizza artesanal en horno de leña" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Momentos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Galería</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="overflow-hidden rounded-sm aspect-[4/3] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary">
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
