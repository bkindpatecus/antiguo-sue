import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";

const ReservationSection = () => {
  const [form, setForm] = useState({
    nombre: "", telefono: "", email: "", fecha: "", hora: "", personas: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, quiero reservar una mesa:\n- Nombre: ${form.nombre}\n- Teléfono: ${form.telefono}\n- Email: ${form.email}\n- Fecha: ${form.fecha}\n- Hora: ${form.hora}\n- Personas: ${form.personas}`;
    window.open(`https://wa.me/56987900077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass = "w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="reservas" className="section-padding bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Tu mesa te espera</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Reservas</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 bg-card p-5 md:p-10 rounded-sm border border-border">
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Nombre completo" required value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className={`${inputClass} pl-11`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input type="tel" placeholder="Teléfono" required value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className={`${inputClass} pl-11`} />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input type="email" placeholder="Email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={`${inputClass} pl-11`} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input type="date" required value={form.fecha} onChange={(e) => update("fecha", e.target.value)} className={`${inputClass} pl-11`} />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input type="time" required value={form.hora} onChange={(e) => update("hora", e.target.value)} className={`${inputClass} pl-11`} />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <select value={form.personas} onChange={(e) => update("personas", e.target.value)} className={`${inputClass} pl-11`}>
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                ))}
                <option value="10+">Más de 10</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-accent text-lg uppercase tracking-widest rounded-sm hover:bg-gold-glow transition-colors duration-300 glow-warm">
            Reservar por WhatsApp
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-muted-foreground font-body">
            También puedes llamarnos directamente al{" "}
            <a href="tel:+56987900077" className="text-primary hover:underline">+56 9 8790 0077</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
