import promo from "../../assets/products/promo.jpg";
import laComponent from "../../assets/products/la component.jpeg";
import laUseState from "../../assets/products/la useState.jpg";
import laUseEffect from "../../assets/products/la useEffect.jpg";
import laUseContext from "../../assets/products/la useContext.jpg";
import laUseReducer from "../../assets/products/la useReducer.jpg";
import hookDeluxe from "../../assets/products/la hook deluxe.jpg";
import laJSXtra from "../../assets/products/la JSXtra.jpg";
import laConsoleLog from "../../assets/products/la console log.jpg";
import laStyledComponent from "../../assets/products/la styled component.jpg";
import virtualDOM from "../../assets/products/La VirtualDOM.jpg";
import laUseParams from "../../assets/products/la useParams.jpg";
import laUseCallback from "../../assets/products/la useCallback.jpg";
import laUseMemo from "../../assets/products/la useMemo.jpg";
import laCustomHook from "../../assets/products/la custom hook.jpg";
import laAsyncAwait from "../../assets/products/la Async Await.png";
import carnivora from "../../assets/products/carnivora.png";
import cheeseDobleBacon from "../../assets/products/cheese doble bacon.jpg";
import sweetDreams from "../../assets/products/SWEET DREAMS.jpg";
import ajillo from "../../assets/products/ajillo.png";
import bigIA from "../../assets/products/big ia.png";
import reactSabores from "../../assets/products/react sabores.png";
import provenzal from "../../assets/products/provenzal.jpg";
import yankee from "../../assets/products/yanke.jpg";
import crispy from "../../assets/products/crispy.jpg";
import arg from "../../assets/products/arg.jpg";
import bosque from "../../assets/products/bosque.png";
import candy from "../../assets/products/candy.png";
import tradicional from "../../assets/products/tradicional.png";
import blue from "../../assets/products/blue.png";
import vikings from "../../assets/products/vikyngs.jpg";
import queen from "../../assets/products/queen.jpg";
import ratonera from "../../assets/products/ratonera.png";
import rock from "../../assets/products/rock.jpg";
import chilindrina from "../../assets/products/chilindrina.png";
import hawaii from "../../assets/products/hawaii.png";
import tRex from "../../assets/products/trex.jpg";
import cuadruple from "../../assets/products/cuadruple.jpg";
import perroCallejero from "../../assets/products/perro callejero.png";
import perroHachiko from "../../assets/products/perro hachiko.png";
import perroChavo from "../../assets/products/perro chavo.png";
import arosCebolla from "../../assets/products/aros de cebolla.jpeg";
import arosCebollaCB from "../../assets/products/aros de cebolla cheddar y bacon.jpg";
import papasFritas from "../../assets/products/papas fritas.jpg";
import papasFritasCB from "../../assets/products/papas fritas cheddar y bacon.jpg";
import bastonesMozzarella from "../../assets/products/baston mozzarella.jpeg";
import cocaColaComun from "../../assets/products/coca cola comun.jpg";
import fanta from "../../assets/products/fanta.png";
import sprite from "../../assets/products/sprite.png";
import cocaLight from "../../assets/products/coca cola light.webp";
import cocaColaTradicional from "../../assets/products/coca tradicional.png";
export const menuCategories = [
 {
  id: "promo",
  name: "Promociones",
  items: [
   {
    id: "cheese-doble",
    name: "CHEESE DOBLE",
    description: "Burger de doble medallón, 280gr de carne premium, con queso cheddar x4.Acompañada de papas fritas y salsa a elección.",
    originalPrice: 12400,
    price: 10499,
    image: promo,
   },
  ],
 },
 {
  id: "burgers-simples",
  name: "Burgers simples",
  items: [
   {
    id: "simple-1",
    name: "La Component",
    description: "Hamburguesa de un medallón de carne con rodaja de ananá grillada, queso mozzarella, panceta ahumada, tomate, lechuga y salsa agridulce. Acompañada de papas fritas y salsa React.",
    price: 11400,
    image: laComponent,
   },
   {
    id: "simple-2",
    name: "La useState",
    description: "Hamburguesa de un medallón de carne 140gr con doble queso cheddar. Acompañada de papas fritas y salsa a elección.",
    price: 9500,
    image: laUseState,
   },
   {
    id: "simple-3",
    name: "La useEffect",
    description: "Hamburguesa de un medallón de carne 140gr con doble queso cheddar y panceta. Va con papas y salsa a elecccion.",
    price: 11300,
    image: laUseEffect,
   },
   {
    id: "simple-4",
    name: "La useContext",
    description: "Hamburguesa de un medallón de carne con queso tybo, jamón, cebolla, lechuga, tomate, huevo y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 11500,
    image: laUseContext,
   },
   {
    id: "simple-5",
    name: "La useReducer",
    description: "Exquisita burger elaborada con pan de papa, un medallón de 140gr de carne premium con queso cheddar, candy bacon y cebolla caramelizada. Acompañada de papas fritas y salsa a elección.",
    price: 11500,
    image: laUseReducer,
   },
   {
    id: "simple-6",
    name: "La Hook Deluxe",
    description: "Hamburguesa de un medallón de carne con queso cheddar, panceta, huevo, cebolla caramelizada y kétchup. Acompañada de papas fritas y salsa a elección.",
    price: 11500,
    image: hookDeluxe,
   },
   {
    id: "simple-7",
    name: "La JSXtra",
    description: "Selecta burger, exquisito pan de papa con un medallón de carne premium de 140g, queso azul, morrones asados y cebolla caramelizada. Va con papas fritas.",
    price: 11600,
    image: laJSXtra,
   },
   {
    id: "simple-8",
    name: "La Console.log",
    description: "Hamburguesa un medallón de carne con queso cheddar, cebolla caramelizada, lechuga, tomate, pepinillos y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 11600,
    image: laConsoleLog,
   },
   {
    id: "simple-9",
    name: "La styled component",
    description: "Hamburguesa de un medallón de carne con panceta, queso cheddar fundido, lechuga, tomate, cebolla morada, morrón y pepinillos. Acompañada de papas fritas y salsa a elección.",
    price: 11800,
    image: laStyledComponent,
   },
   {
    id: "simple-10",
    name: "La VirtualDOM",
    description: "Hamburguesa de un medallón de carne 140gr con queso provoleta, tomate, lechuga, salsa de morrón, cebolla caramelizada y chimichurri. Acompañada de papas fritas y salsa a elección.",
    price: 11600,
    image: virtualDOM,
   },
   {
    id: "simple-11",
    name: "La useParams",
    description: "Hamburguesa de un medallón de carne con panceta, cheddar, nachos, pepinillos, lechuga, tomate, cebolla morada y guacamole. Acompañada de papas fritas.",
    price: 11999,
    image: laUseParams,
   },
   {
    id: "simple-12",
    name: "La useCallback",
    description: "Hamburguesa de un medallón de carne con quesos azul y provoleta, mix de hojas verdes, cebolla caramelizada y champiñones. Acompañada de papas fritas y salsa a elección.",
    price: 11800,
    image: laUseCallback,
   },
   {
    id: "simple-13",
    name: "La useMemo",
    description: "Hamburguesa de un medallón de carne con triple queso; cheddar, tybo y deditos de mozarela, panceta, cebolla morada y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 11800,
    image: laUseMemo,
   },
   {
    id: "simple-14",
    name: "La CustomHook",
    description: "Hamburguesa de un medallón de carne con doble queso; azul y mozarela, cebolla morada, rúcula y nueces. Acompañada de papas fritas y salsa a elección.",
    price: 11800,
    image: laCustomHook,
   },
   {
    id: "simple-15",
    name: "La AsyncAwait",
    description: "Hamburguesa de un medallón de carne con mix de hojas verdes, morrones confitados, queso mozarela, panceta, huevo y guacamole. Acompañada de papas fritas y salsa a elección.",
    price: 11800,
    image: laAsyncAwait,
   },
  ],
 },
 {
  id: "burgers-dobles",
  name: "Burgers dobles y mas",
  items: [
   {
    id: "doble-1",
    name: "CARNIVORA, el Ataque de los Zombies",
    description: "Hamburguesa de TRIPLE medallón (420gr) de carne premium, queso cheddar X6, Panceta X6 y cebolla caramelizada con salsa barbecue. Acompañada de papas fritas y salsa a elección.",
    price: 17400,
    image: carnivora,
   },
   {
    id: "doble-2",
    name: "CHEESE DOBLE Y BACON",
    description: "Burger de doble medallón, 280gr de carne premium, con panceta X3 y cheddar X4. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: cheeseDobleBacon,
   },
   {
    id: "doble-3",
    name: "⭐ SWEET DREAMS",
    description: "Hamburguesa de doble medallón de carne, 280g, con cheddar x4, candy bacon y cebolla caramelizada a la bbq. Va con papas fritas y salsa a elección.",
    price: 13999,
    image: sweetDreams,
   },
   {
    id: "doble-4",
    name: "Function Burger",
    description: "Burger de doble medallón de carne premium, 280g, con salsa especial de ajo, panceta, queso cheddar, lechuga triturada y tomate en rodaja. Va con papas fritas y dip a elección.",
    price: 13999,
    image: ajillo,
   },
   {
    id: "doble-5",
    name: "BIG IA",
    description: "Burger de doble medallón, 280gr de carne premium con exquisita salsa tasty, queso cheddar, cebolla y lechuga triturada. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: bigIA,
   },
   {
    id: "doble-6",
    name: "REACT, 100% sabores",
    description: "Hamburguesa de doble medallón de carne con queso tybo, jamón, cebolla, lechuga, tomate, huevo y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: reactSabores,
   },
   {
    id: "doble-7",
    name: "Burger Loop",
    description: "Hamburguesa de doble medallón, 280gr de carne, con cebolla caramelizada, con queso mozzarella, panceta y provenzal. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: provenzal,
   },
   {
    id: "doble-8",
    name: "YANKEE, I want you for React-Burger army!",
    description: "Doble medallón de carne con queso cheddar, panceta, huevo, cebolla caramelizada y kétchup. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: yankee,
   },
   {
    id: "doble-9",
    name: "CRISPY, aparte de fachere, crujiente",
    description: "Hamburguesa de doble medallón de carne con queso cheddar, repollo morado, panceta, cebolla crispy y salsas de alioli y kétchup. Acompañada de papas fritas y salsa a elección.",
    price: 13999,
    image: crispy,
   },
   {
    id: "doble-10",
    name: "ARGENTINA, selección de sabores!",
    description: "Hamburguesa de doble medallón de carne con queso provoleta, tomate, lechuga, salsa de morrón, cebolla caramelizada y chimichurri. Acompañada de papas fritas y salsa a elección.",
    price: 14200,
    image: arg,
   },
   {
    id: "doble-11",
    name: "⭐ 60 & 118 St",
    description: "Burger Premium de 2 medallones de carne (280g) con doble queso; cheddar y provoleta, panceta y cebolla caramelizada. Va con papas y salsa a elección.",
    price: 14200,
    image: bosque,
   },
   {
    id: "doble-12",
    name: "CANDY PERRY",
    description: "Hamburguesa de doble medallón de carne con cheddar x4, Candy Bacon y morrón, con dip especial de morrón. Va con papas fritas y dip elección.",
    price: 14200,
    image: candy,
   },
   {
    id: "doble-13",
    name: "TRADICIONAL, lo bueno se mantiene",
    description: "Hamburguesa de doble medallón de carne con queso cheddar, cebolla caramelizada, lechuga, tomate, pepinillos y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 14200,
    image: tradicional,
   },
   {
    id: "doble-14",
    name: "BLUE REACT",
    description: "Hamburguesa de doble medallón (280 gr), con quesos azul y provoleta, mix de hojas verdes, cebolla caramelizada y champiñones. Con papas y salsa a elección.",
    price: 14600,
    image: blue,
   },
   {
    id: "doble-15",
    name: "VIKINGS, la leyenda de los dioses",
    description: "Hamburguesa de doble medallón de carne con panceta, queso cheddar fundido, lechuga, tomate, cebolla morada, morrón y pepinillos. Acompañada de papas fritas y salsa a elección.",
    price: 14600,
    image: vikings,
   },
   {
    id: "doble-16",
    name: "HALO HAWAII",
    description: "Hamburguesa de doble medallón de carne (280gr) con rodaja de ananá grillada, queso mozzarella, panceta ahumada, tomate, lechuga y salsa agridulce. Acompañada de papas fritas y salsa a elección.",
    price: 14800,
    image: hawaii,
   },
   {
    id: "doble-17",
    name: "QUEEN, la reina de la sabrosura",
    description: "Hamburguesa de doble medallón de carne con mix de hojas verdes, morrones confitados, queso mozarela, panceta, huevo y guacamole. Acompañada de papas fritas y salsa a elección.",
    price: 14600,
    image: queen,
   },
   {
    id: "doble-18",
    name: "LOBO, sabor de manada",
    description: "Hamburguesa de doble medallón de carne con triple queso; cheddar, tybo y deditos de mozarela, panceta, cebolla morada y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 14600,
    image: ratonera,
   },
   {
    id: "doble-19",
    name: "ROCK AND ROLL",
    description: "Hamburguesa de doble medallón de carne con queso azul y mozarela, cebolla morada, rúcula y nueces. Acompañada de papas fritas y salsa a elección.",
    price: 14600,
    image: rock,
   },
   {
    id: "doble-20",
    name: "CHILINDRINA, ándale ándale",
    description: "Hamburguesa de doble medallón de carne con triple queso; cheddar, tybo y deditos de mozarela, panceta, cebolla morada y mayonesa especial. Acompañada de papas fritas y salsa a elección.",
    price: 14600,
    image: chilindrina,
   },
   {
    id: "doble-21",
    name: "T-REX CHEESE",
    description: "Burger de TRIPLE medallón, 420gr de pura carne premium, con sextuple cheddar. Va acompañada de papas fritas.",
    price: 15600,
    image: tRex,
   },
   {
    id: "doble-22",
    name: "CUADRUPLE 4X8",
    description: "Exquisita cheese burger con pan artesanal de papa, CUADRUPLE medallón de carne premium (560gr) y Cheddar x8. Acompañada de papas fritas y salsa a elección.",
    price: 18400,
    image: cuadruple,
   },

  ],
 },
 {
  id: "otros",
  name: "Otros",
  items: [
   {
    id: "hotdog-1",
    name: "⭐ Perro Callejero",
    description: "Super Pancho! Pan artesanal y salchicha premium con: panceta, queso, cebolla a la plancha y lluvia de papitas pay. En su preparación lleva mayo de ajo, mostaza, ketchup y salsa golf. Acompañado de papas fritas 🍟",
    price: 11500,
    image: perroCallejero,
   },
   {
    id: "hotdog-2",
    name: "Perro Hachiko",
    description: "Super Pancho! Pan artesanal y salchicha premium con: panceta, queso, cebolla a la plancha, mix de carne despechada de res y pollo. En su preparación lleva mayo de ajo, mostaza, ketchup y salsa golf. Acompañado de papas fritas 🍟",
    price: 11500,
    image: perroHachiko,
   },
   {
    id: "hotdog-3",
    name: "Perro chavo del 8",
    description: "Super Pancho! Pan artesanal y salchicha premium con: panceta, queso, cebolla caramelizada, mix de carne y pollo, nachos y pico gallo. En su preparación lleva mayo de ajo, mostaza, ketchup y salsa golf. Acompañado de papas fritas 🍟",
    price: 12890,
    image: perroChavo,
   },
   {
    id: "hotdog-4",
    name: "Aros de Cebolla",
    description: "Aros de Cebolla x 10u + 1 dip de mayo de ajo.",
    price: 8000,
    image: arosCebolla,
   },
   {
    id: "hotdog-5",
    name: "Aros de Cebolla, Cheddar y Bacon",
    description: "Aros de Cebolla x 10u con queso cheddar y panceta.",
    price: 9000,
    image: arosCebollaCB,
   },
   {
    id: "hotdog-6",
    name: "Papas fritas",
    description: "Porción de papas fritas.",
    price: 8000,
    image: papasFritas,
   },
   {
    id: "hotdog-7",
    name: "Papas fritas, Cheddar y Bacon",
    description: "Papas fritas con queso cheddar y trozos de panceta.",
    price: 9999,
    image: papasFritasCB,
   },
   {
    id: "hotdog-8",
    name: "Bastones de Mozzarella",
    description: "Bastones de Mozza x 10u + 1 dip de ketchup.",
    price: 10500,
    image: bastonesMozzarella,
   },
  ],
 },
 {
  id: "bebidas",
  name: "Bebidas",
  items: [
   {
    id: "bebida-1",
    name: "Coca Cola Comun",
    description: "Botella 1.5L",
    price: 3000,
    image: cocaColaComun,
   },
   {
    id: "bebida-2",
    name: "Fanta",
    description: "Botella 1.5L",
    price: 3000,
    image: fanta,
   },
   {
    id: "bebida-3",
    name: "Sprite Lima-Limon",
    description: "Botella 1.5L",
    price: 3000,
    image: sprite,
   },
   {
    id: "bebida-4",
    name: "Coca-Cola Light",
    description: "Botella 1.5Lt",
    price: 3000,
    image: cocaLight,
   },
   {
    id: "bebida-5",
    name: "Coca-Cola Tradicional",
    description: "Botella 500ml",
    price: 2000,
    image: cocaColaTradicional,
   },
  ],
 },
];
