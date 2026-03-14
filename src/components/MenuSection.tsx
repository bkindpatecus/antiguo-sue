import { useState } from "react";

type Category = {
  name: string;
  items: { name: string; desc: string; price: string }[];
};

const menuData: Category[] = [
  {
    name: "Platos Principales",
    items: [
      { name: "Costillar a la Parrilla", desc: "Costillar de cerdo ahumado con vegetales de temporada", price: "$12.900" },
      { name: "Trucha del Cajón", desc: "Trucha fresca a la plancha con puré rústico y ensalada", price: "$11.500" },
      { name: "Lomo a lo Pobre", desc: "Lomo vetado con papas fritas, cebolla caramelizada y huevos", price: "$13.900" },
      { name: "Pollo al Horno", desc: "Pollo marinado en hierbas con arroz y ensalada fresca", price: "$9.900" },
    ],
  },
  {
    name: "Hamburguesas",
    items: [
      { name: "Hamburguesa del Cajón", desc: "Carne angus 200g, cheddar, tocino, lechuga y tomate", price: "$8.900" },
      { name: "Hamburguesa Clásica", desc: "Carne 150g, queso, lechuga, tomate y mayonesa casera", price: "$7.500" },
      { name: "Hamburguesa BBQ", desc: "Carne angus, cebolla crispy, queso y salsa BBQ ahumada", price: "$9.500" },
    ],
  },
  {
    name: "Pizzas",
    items: [
      { name: "Pizza Margarita", desc: "Salsa de tomate, mozzarella y albahaca fresca", price: "$8.900" },
      { name: "Pizza del Bosque", desc: "Champiñones, pimentón, cebolla morada y aceitunas", price: "$9.900" },
      { name: "Pizza Especial", desc: "Jamón serrano, rúcula, parmesano y aceite de oliva", price: "$10.900" },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      { name: "Sándwich de Lomito", desc: "Lomito, palta, tomate, mayo casera en pan artesanal", price: "$7.900" },
      { name: "Sándwich Vegetariano", desc: "Berenjena, zapallo italiano, queso de cabra y rúcula", price: "$6.900" },
    ],
  },
  {
    name: "Opciones Vegetarianas",
    items: [
      { name: "Ensalada del Huerto", desc: "Mix de hojas verdes, queso de cabra, nueces y vinagreta", price: "$7.500" },
      { name: "Risotto de Champiñones", desc: "Arroz arborio, champiñones del bosque y parmesano", price: "$9.900" },
      { name: "Bowl Mediterráneo", desc: "Quinoa, hummus, falafel, vegetales asados", price: "$8.500" },
    ],
  },
  {
    name: "Postres",
    items: [
      { name: "Brownie de Chocolate", desc: "Chocolate belga con helado de vainilla y crema", price: "$5.500" },
      { name: "Kuchen de la Casa", desc: "Kuchen de nuez con salsa de caramelo", price: "$4.900" },
      { name: "Leche Asada", desc: "Receta tradicional con caramelo casero", price: "$4.500" },
    ],
  },
  {
    name: "Bebidas",
    items: [
      { name: "Vino Tinto de la Casa", desc: "Copa de vino tinto reserva chileno", price: "$4.500" },
      { name: "Cerveza Artesanal", desc: "Cerveza local del Cajón del Maipo", price: "$4.000" },
      { name: "Limonada Natural", desc: "Limón, menta y jengibre", price: "$3.500" },
      { name: "Café de Grano", desc: "Espresso, americano o cortado", price: "$2.500" },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-accent text-primary uppercase tracking-[0.3em] text-sm mb-4">Nuestra Carta</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Menú</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 font-accent text-sm uppercase tracking-wider rounded-sm transition-all duration-300 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {menuData[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-start gap-4 pb-6 border-b border-border/50 last:border-0"
            >
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
              </div>
              <span className="font-display text-xl font-bold text-primary whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
