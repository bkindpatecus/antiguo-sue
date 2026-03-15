import { useState } from "react";
import { Leaf } from "lucide-react";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  vegan?: boolean;
};

type Category = {
  name: string;
  note?: string;
  items: MenuItem[];
};

const menuData: Category[] = [
  {
    name: "Entradas",
    items: [
      { name: "Sopaipillitas con Guacamole", desc: "Sopaipillas hechas con zapallo horneado a las hierbas y materia grasa vegetal.", price: "$10.300", vegan: true },
      { name: "Papas Fritas Solas", desc: "Papas fritas naturales en corte bastón.", price: "$12.500", vegan: true },
      { name: "Papas Antiguo Sueño", desc: "Papas fritas naturales cubiertas con salsa de queso cheddar con carne mechada y cebollín picado.", price: "$15.900" },
      { name: "Ceviche de Salmón y Camarón", desc: "Cubos de salmón con camarón y verduras, reposadas en limón, sobre una cama de leche de tigre de la casa y hojas verdes. Acompañado de chips de tortillas.", price: "$14.900" },
      { name: "Papas Fritas Veganas", desc: "Papas fritas naturales en bastón con salsa de queso vegano con champiñón, brócoli y coliflor salteados. Decorado con cebollín y pesto de cilantro.", price: "$14.300", vegan: true },
      { name: "Tartar de Atún", desc: "Cubos de atún adobados en salsa Ponzu con sésamo y ceste cítrico montados sobre un tabulé de cuscus verde en una isla de crema ahumada con aceite de hierbas verdes y chips de tortillas.", price: "$14.900" },
      { name: "Causeo Antiguo Sueño", desc: "Tomate Cherry en cuartos y cubos de queso de cabra acompañado de verduras reposadas en limón y ají verde. Aderezados con pesto de cilantro, ciboulette y limoneta. Con chips de tortilla. *Opción vegana disponible.", price: "$9.900" },
      { name: "Ceviche Plant Base", desc: "Palmitos, espárragos, choclo peruano, mango y verduras, reposadas en limón, sobre una cama de leche de tigre vegana de la casa y hojas verdes. Con chips de tortillas.", price: "$11.900", vegan: true },
      { name: "Sopa Fría de Pepino", desc: "Sopa fría de pepino decorada con láminas de pepino adobadas en hinojo, ciboulette y aceite de hierbas verdes.", price: "$8.900" },
      { name: "Ceviche Pulpo y Camarón", desc: "Trozos de Pulpo con Camarón y verduras, reposadas en limón, sobre una cama de leche de tigre de la casa y hojas verdes. Acompañados de chips de tortillas.", price: "$15.900" },
      { name: "La Tabla del 4", desc: "Un sándwich a elección partido en dos, una porción causeo antiguo sueño, sopaipillitas de la casa y una porción de ceviche. Más salsa de la casa. Opción vegana disponible.", price: "$21.800", vegan: true },
      { name: "Champiñón y Col al Pil-Pil", desc: "Trozos de champiñones, coliflor y brócoli salteados en ají cacho de cabra, ajo y cilantro, flambeadas con vino blanco, apagadas con caldo de verduras, llevados a reducción y acompañados de chips de tortilla.", price: "$7.900" },
      { name: "Tartar de Betarragas", desc: "Cubos de betarraga adobados, frutilla y sésamo montados en un tabulé de cus cus verde decorados con palta y alcaparras sobre una salsa Ponzu y aceite de hierbas verdes.", price: "$12.900", vegan: true },
      { name: "Tabla del Mar", desc: "Una porción de Ceviche de Salmón con Camarón, Tartar de Atún y una porción de Ceviche de Pulpo con Camarón. Acompañados de chips de tortilla.", price: "$19.900" },
    ],
  },
  {
    name: "Platos de Fondo",
    items: [
      { name: "Punta de Ganso con Puré de Zanahoria", desc: "Punta de Ganso con demiglasse de vino tinto con frutos rojos y chocolate acompañado de puré de zanahoria avellanado.", price: "$17.900" },
      { name: "Atún con Cremoso de Quinoa", desc: "Tataki de Atún, acompañado de cremoso de quinoa al cilantro. Decorado con berros aderezados con aceto balsámico.", price: "$17.900" },
      { name: "Pastel de Choclo", desc: "Pino de carne mechada acompañado de filetillos de pollo, aceituna y huevo duro cubiertos de pastelera de choclo. Decorado con pesto de albahaca.", price: "$15.900" },
      { name: "Lomo con Risotto de Mote", desc: "Lomo Vetado acompañado de cremoso risotto de mote al apio. Decorado con berros, tierra de almendras con cranberrys y flores de estación.", price: "$19.900" },
      { name: "Coliflor de la Chacra", desc: "Coliflor encurtida, horneada en salsa barbecue hecha en casa, acompañada de hummus de garbanzo con betarraga. Decorada con brotes y flores de estación.", price: "$11.700", vegan: true },
      { name: "Lomo a lo Pobre", desc: "Lomo Vetado acompañado de papas fritas naturales, cebolla caramelizada y huevo frito. Decorado con cilantro.", price: "$18.900" },
      { name: "Pastel de Choclo Plant Base", desc: "Pino de carne de soya acompañado con champiñones y aceitunas, cubierto de pastelera de choclo vegana. Decorado con pesto de albahaca.", price: "$14.300", vegan: true },
      { name: "Costillar de Cerdo con Puré", desc: "Costillar de cerdo nacional horneado con salsa de chimichurri, acompañado de un cremoso puré tradicional.", price: "$17.900" },
    ],
  },
  {
    name: "Ensaladas",
    items: [
      { name: "Ensalada del Valle", desc: "Mix de hojas, lentejas rojas, cebolla morada, cilantro, crocante de queso parmesano, gajos de naranja, trozos de apio, alcachofas encurtidas y tomate Cherry. Con limoneta de la casa. Acompañado de Filetillos de Pollo, Camarón Salteado o Tofu.", price: "$9.400", vegan: true },
      { name: "Ensalada Cesar Pollo y Camarón", desc: "Mix de hojas, tomate cherry, crutones y crocante de queso parmesano acompañados de pollo y camarones a la plancha, junto a un aderezo cesar de pulpo y aceite de ciboulette.", price: "$12.600" },
      { name: "Ensalada de la Chacra", desc: "Mix de hojas, cus cus, palta, pepino, frutilla, almendras laminadas y palmitos. Con limoneta de la casa. Acompañado de Filetillos de Pollo o Camarón Salteado o Tofu.", price: "$9.400", vegan: true },
      { name: "Ensalada Mix Verde Palmito", desc: "Ensalada individual de mix de hojas verdes con palta y palmitos.", price: "$4.900" },
      { name: "Ensalada Mix Palta", desc: "Ensalada individual de mix de hojas verdes acompañada de trozos de palta, zanahoria y aceitunas.", price: "$4.900" },
      { name: "Ensalada Chilena", desc: "Clásica ensalada de tomate con cebolla morada en formato individual.", price: "$4.500" },
    ],
  },
  {
    name: "Sanguches",
    note: "Todos en pan de elaboración propia. Con filetitos de Pollo, Pulled Pork, Hamburguesa de vacuno o Tofu.",
    items: [
      { name: "Italiano", desc: "Tomate, palta y lactonesa.", price: "$7.800", vegan: true },
      { name: "Chacarero", desc: "Tomate, poroto verde y lactonesa.", price: "$7.800" },
      { name: "Barros Luco", desc: "Base más queso fundido.", price: "$7.800" },
      { name: "Montañez", desc: "Panceta, cebolla caramelizada, queso fundido y salsa barbacue.", price: "$8.200" },
      { name: "Del Estero", desc: "Champiñones salteados, guacamole, lechuga aderezada con vinagreta y queso fundido.", price: "$8.200" },
      { name: "Colorado", desc: "Queso de cabra, cebolla morada, tomate, salsa tártara y pepinillo dulce.", price: "$8.200" },
    ],
  },
  {
    name: "Pizzas",
    note: "Masas de 30 cm de diámetro, de elaboración propia. Precio único: $14.900",
    items: [
      { name: "Mechada", desc: "Pomodoro, mozzarella, cebollín y carne mechada.", price: "$14.900" },
      { name: "Del Huerto", desc: "Pomodoro, mozzarella, champiñones, queso de cabra, rúcula y pesto de rúcula.", price: "$14.900" },
      { name: "Napolitana", desc: "Pomodoro, mozzarella, tomate Cherry, aceitunas y jamón.", price: "$14.900" },
      { name: "Caprese", desc: "Pomodoro, mozzarella, queso de cabra, tomate Cherry y pesto de albahaca.", price: "$14.900" },
      { name: "Diabla", desc: "Pomodoro, mozzarella, aceitunas, pepperoni, cebolla morada y jalapeños.", price: "$14.900" },
      { name: "Pepperoni", desc: "Pomodoro, mozzarella y láminas de pepperoni.", price: "$14.900" },
      { name: "Vegana", desc: "Pomodoro, queso vegano, berenjena encurtida en curry, champiñones y pesto de rúcula.", price: "$14.900", vegan: true },
      { name: "Tres Quesos", desc: "Pomodoro, queso mozzarella, queso de cabra, queso parmesano y alcachofas.", price: "$14.900" },
      { name: "De la Chacra", desc: "Pomodoro, queso mozzarella, choclo, cebolla morada, tomate Cherry y berros.", price: "$14.900" },
      { name: "BBQ", desc: "Pomodoro, queso mozzarella, pollo salteado en salsa bbq, panceta, cebollín y pesto de cilantro.", price: "$14.900" },
    ],
  },
  {
    name: "Platos de Niños",
    items: [
      { name: "Fettuccine", desc: "Fettuccine con salsa pomodoro o salsa pesto.", price: "$8.900" },
      { name: "Carne Mechada con Papas Fritas", desc: "Carne mechada acompañada de una porción de papas fritas naturales.", price: "$9.700" },
    ],
  },
  {
    name: "Postres",
    items: [
      { name: "Torta Amor", desc: "Torta de Hojarasca, rellena con mermelada de frambuesa, crema chantilly, manjar y crema pastelera. Cubierta con crema chantilly. Decorada con frutas de estación.", price: "$5.700" },
      { name: "Panqueques", desc: "Dos panqueques rellenos con manjar junto a una porción de helado de vainilla.", price: "$5.200" },
      { name: "Pie de Limón", desc: "Crujiente masa quebrada rellena de mezcla de limón y leche condensada con superficie de suave merengue.", price: "$4.900" },
      { name: "Copa de Helado", desc: "Tres bolitas de helado a elección (frutilla, vainilla o chocolate) acompañado con una salsa de la casa a elección.", price: "$5.100" },
      { name: "Torta de Zanahoria", desc: "Húmedo bizcocho de zanahoria, nuez, esencia de clavo de olor, canela y nuez moscada acompañado de manjar.", price: "$5.700" },
      { name: "Tartaleta de Frutos Rojos", desc: "Tarta vegana con gelé de frambuesa y ganache vegano de chocolate. Decorado con frutos rojos.", price: "$5.700", vegan: true },
      { name: "Vienetta de la Casa Merengue Mango", desc: "Postre frío de merengue con crema batida rellena de coulis de mango y naranja decorada con un gel de menta y caviar de mango.", price: "$5.400" },
    ],
  },
  {
    name: "Cafetería",
    note: "Café colombiano de grano arábico tostado en Chile.",
    items: [
      { name: "Espresso", desc: "Bebida concentrada y fuerte de café.", price: "$2.300" },
      { name: "Americano", desc: "Espresso más agua.", price: "$2.500" },
      { name: "Cortado", desc: "Espresso más leche caliente texturizada.", price: "$2.900" },
      { name: "Capuccino", desc: "Espresso con leche vaporizada y espuma de leche.", price: "$3.700" },
      { name: "Latte", desc: "Leche vaporizada más espresso y espuma de leche.", price: "$3.300" },
      { name: "Café Helado", desc: "Café con leche y helado de vainilla artesanal.", price: "$4.800" },
      { name: "Chocolate Caliente con Marshmallow", desc: "Bebida a base de leche más cacao y especias: cardamomo, clavo de olor y naranja.", price: "$3.700" },
      { name: "Té de Hoja", desc: "Negro, verde o rojo.", price: "$2.500" },
      { name: "Té Saborizado", desc: "Té Chai / Té rojo con cedrón y zeste de limón / Té rojo con menta y cáscara de naranja.", price: "$2.900" },
    ],
  },
  {
    name: "Bebestibles",
    items: [
      { name: "Jugos Naturales", desc: "Fruta natural, endulzada con goma.", price: "$3.900" },
      { name: "Limonadas", desc: "Menta, Albahaca o Jengibre.", price: "$4.000" },
      { name: "Bebidas Gaseosas", desc: "Coca Cola Zero, Fanta o Sprite.", price: "$2.700" },
      { name: "Leche con Frutilla", desc: "Fruta natural, endulzada con goma.", price: "$4.100" },
      { name: "Agua Mineral", desc: "Con o sin gas.", price: "$2.100" },
      { name: "Bebida Artesanal", desc: "Zumo natural (Limón, Naranja o Maracuyá), agua con gas, goma y hielo frappé.", price: "$3.500" },
    ],
  },
  {
    name: "Cervezas",
    note: "Cervezas artesanales Plutónica.",
    items: [
      { name: "Golden", desc: "Cerveza dorada y refrescante que equilibra las notas dulces de la malta con el amargor suave del lúpulo con un final cítrico. Ibu: 18 / Alc: 5%", price: "Pinta $4.600 · ½ Pinta $3.300" },
      { name: "Pale Ale", desc: "Cerveza suave y refrescante, levemente amarga y agradable con notas a caramelo. Ibu: 20 / Alc: 4.5%", price: "Pinta $4.600 · ½ Pinta $3.300" },
      { name: "Ámbar Americana", desc: "Cerveza intensa, amarga y con un final a caramelo, que combina maltas caramelizadas y lúpulos resinosos y frutales. Ibu: 40 / Alc: 6%", price: "Pinta $4.800 · ½ Pinta $3.500" },
      { name: "I.P.A.", desc: "Cerveza amarga con un intenso aroma floral, moderadamente fuerte y de final seco. Ibu: 60 / Alc: 6.5%", price: "Pinta $4.800 · ½ Pinta $3.500" },
      { name: "Dunkel Weizen", desc: "Cerveza de trigo oscura, especiada, afrutada maltosa y refrescante con carácter. Ibu: 13 / Alc: 5.6%", price: "Pinta $4.600 · ½ Pinta $3.300" },
      { name: "Hidromiel", desc: "Fermento de agua, miel de la zona y frutas de estación. Alc: 8%", price: "$3.500" },
      { name: "Ginger Beer", desc: "Fermento de agua, jengibre y azúcar. Alc: 0%", price: "$3.400" },
      { name: "Michelada o Chelada", desc: "Preparación con cerveza.", price: "$1.000" },
      { name: "Cerveza Importada", desc: "Consultar disponibilidad.", price: "$3.600" },
      { name: "Cerveza 0° Alcohol", desc: "Sin alcohol.", price: "$3.400" },
    ],
  },
  {
    name: "Coctelería",
    items: [
      { name: "Mojito Tradicional", desc: "Mojito clásico.", price: "$7.400" },
      { name: "Mojito Berries con Hidromiel", desc: "Mojito con berries e hidromiel.", price: "$7.900" },
      { name: "Mojito Maracuyá", desc: "Mojito con maracuyá.", price: "$7.900" },
      { name: "Mojito Berries", desc: "Mojito con berries.", price: "$7.900" },
      { name: "Mojito Jengibre", desc: "Mojito con jengibre.", price: "$7.900" },
      { name: "Sour Tradicional", desc: "Pisco con limón, albúmina y goma.", price: "$4.800" },
      { name: "Sour Berries", desc: "Sour con berries.", price: "$5.100" },
      { name: "Sour Jengibre", desc: "Sour con jengibre.", price: "$4.900" },
      { name: "Sour Chardonnay", desc: "Vino con limón, albúmina y goma.", price: "$4.800" },
      { name: "Sour Catedral", desc: "Tradicional / Jengibre / Frambuesa.", price: "$7.900" },
      { name: "Gin Tonic", desc: "Gin más bebida tónica.", price: "$7.900" },
      { name: "Tom Collins", desc: "Gin con limón, hielo y soda.", price: "$7.900" },
      { name: "London Mule", desc: "Gin, ginger beer y soda.", price: "$7.400" },
      { name: "Gin Stone", desc: "Gin y cerveza stone sabores (mango / berries).", price: "$7.400" },
      { name: "Tropical Gin", desc: "Gin y red bull tropical.", price: "$7.900" },
      { name: "Sangría", desc: "Vino tinto con jugo de naranja, trozos de fruta y Curazao.", price: "500cc $6.500 · 1Lt $12.900" },
      { name: "Borgoña / Clery", desc: "Vino tinto o blanco con frutilla.", price: "500cc $6.500 · 1Lt $12.900" },
      { name: "Terremoto", desc: "Pipeño, helado de piña, granadina.", price: "$5.900" },
      { name: "Jager Boom", desc: "Jägermeister con energética.", price: "$7.900" },
      { name: "Roncola", desc: "Barceló añejo + bebida.", price: "$6.900" },
      { name: "Piscola", desc: "Pisco Alto del Carmen 35° + bebida.", price: "$6.900" },
      { name: "Whiscola", desc: "Whisky + bebida.", price: "$6.900" },
      { name: "Aperol o Ramazzotti", desc: "(Rosato / Violetto) Spritz.", price: "$6.900" },
      { name: "Daikiri Berries", desc: "Ron blanco, berries, limón y hielo.", price: "$7.900" },
      { name: "Moscow Mule", desc: "Vodka y ginger beer.", price: "$7.400" },
      { name: "Ginger Jim", desc: "Whisky, láminas de jengibre, limón y ginger beer.", price: "$7.400" },
      { name: "Chilcano Sabores", desc: "Macerado de agua ardiente local, limón, pisco, goma y soda.", price: "$6.300" },
      { name: "Kir Royale", desc: "Espumante brut, licor de casis.", price: "$6.300" },
      { name: "Whisky", desc: "Johnny Walker o Jack Daniels.", price: "$5.000" },
    ],
  },
  {
    name: "Vinos",
    items: [
      { name: "Santa Digna Gran Reserva", desc: "Merlot, Carmenere, Cabernet Sauvignon.", price: "$17.900" },
      { name: "Viu Manet Reserva", desc: "Malbec Rosé, Merlot, Carmenere, Cabernet Sauvignon, Chardonnay, Sauvignon Blanc.", price: "$17.900" },
      { name: "Chagual, Viña los Vascos", desc: "Sauvignon Blanc.", price: "$18.900" },
      { name: "Miguel Torres Gran Reserva", desc: "Cabernet Sauvignon.", price: "$19.500" },
      { name: "First Edition, Viña Valle Secreto Gran Reserva", desc: "Cabernet Sauvignon.", price: "$19.500" },
      { name: "Late Harvest Santa Carolina 500cc", desc: "Cabernet Sauvignon.", price: "$12.400" },
      { name: "Espumante Viñamar", desc: "Brut.", price: "$16.000" },
      { name: "Copa Vino Tinto Reserva", desc: "Según disponibilidad.", price: "$4.100" },
      { name: "Copa Vino Blanco", desc: "Según disponibilidad.", price: "$3.900" },
      { name: "Copa de Espumante", desc: "Brut.", price: "$4.200" },
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
              className={`px-3 py-2 font-accent text-xs md:text-sm uppercase tracking-wider rounded-sm transition-all duration-300 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category note */}
        {menuData[activeCategory].note && (
          <p className="text-center font-body text-muted-foreground italic text-sm mb-8 max-w-2xl mx-auto">
            {menuData[activeCategory].note}
          </p>
        )}

        {/* Menu items */}
        <div className="max-w-3xl mx-auto space-y-5">
          {menuData[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-start gap-4 pb-5 border-b border-border/50 last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">{item.name}</h3>
                  {item.vegan && (
                    <Leaf className="w-4 h-4 text-forest flex-shrink-0" />
                  )}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
              <span className="font-display text-base md:text-lg font-bold text-primary whitespace-nowrap flex-shrink-0 mt-1">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
