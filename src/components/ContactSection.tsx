import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Encuéntranos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Contacto</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Antiguo Sueño Restorán</h3>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Dirección</p>
                <p className="font-body text-muted-foreground">Camino al Volcán #10.860, El Manzano,<br />San José de Maipo, Chile</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Teléfono / WhatsApp</p>
                <a href="tel:+56987900077" className="font-body text-muted-foreground hover:text-primary transition-colors">+56 9 8790 0077</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Email</p>
                <a href="mailto:admantiguosueno@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors">admantiguosueno@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Horario</p>
                <div className="font-body text-muted-foreground space-y-1">
                  <p>Lunes a Miércoles: 14:00 – 21:45</p>
                  <p>Jueves: 14:00 – 22:45</p>
                  <p>Viernes: 13:00 – 22:45</p>
                  <p>Sábado: 13:00 – 22:45</p>
                  <p>Domingo: 13:00 – 20:30</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Instagram</p>
                <a href="https://instagram.com/antiguorestoran" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors">@antiguorestoran</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-border h-80 md:h-auto min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.5!2d-70.35!3d-33.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM3JzEyLjAiUyA3MMKwMjEnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Antiguo Sueño Restorán"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
