import tartare from "@/assets/dish-tartare.jpg";
import pizza from "@/assets/food-pizza-real.jpg";
import plutonica from "@/assets/drink-plutonica.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const FeaturedDishes = () => {
  const dishes = [
    { img: tartare, name: "Tartare de Atún", desc: "Atún fresco con palta, alcaparras y tostadas" },
    { img: pizza, name: "Pizza del Huerto", desc: "Mozzarella, champiñones, rúcula y pesto" },
    { img: plutonica, name: "Cerveza Plutónica", desc: "Cerveza artesanal elaborada en el Cajón del Maipo" },
    { img: dishDessert, name: "Postres de la Casa", desc: "Dulces artesanales con productos de la zona" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Lo más pedido</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Platos Destacados</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div key={dish.name} className="group rounded-sm overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
              <div className="overflow-hidden">
                <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{dish.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
