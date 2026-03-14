import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const FeaturedDishes = () => {
  const dishes = [
    { img: dish1, name: "Costillar a la Parrilla", desc: "Tierno costillar con vegetales de la huerta" },
    { img: dish2, name: "Pizza Artesanal", desc: "Masa madre, mozzarella y albahaca fresca" },
    { img: dish3, name: "Hamburguesa del Cajón", desc: "Carne angus, queso cheddar y tocino ahumado" },
    { img: dishDessert, name: "Brownie de Chocolate", desc: "Chocolate belga con crema montada" },
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
