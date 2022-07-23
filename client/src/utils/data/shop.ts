export type Product = {
  id: number;
  name: string;
  creator: string;
  price: number;
  size?: string;
  image: string;
  description: string;
  category: string;
  available: boolean;
  ingredients?: {
    topNotes?: string[],
    heartNotes?: string[],
    backgroundNotes?: string[]
  };
  [key: string]: any;
};

export const data: Product[] = [
  {
    // atractone_Musk
    id: 1,
    name: "Ressentez l'attraction : Atractone Musk Ramon Monegal",
    creator: "Sergey Borisov",
    price: 200,
    size: "100ml",
    image: "https://picsum.photos/200/300",
    count: 1,
    category: "perfume",
    description: "A silky, fresh and delicate floral-musky fragrance, Atractone Musk is promoted under the slogan Feel the attractionIts freshness begins with ozonated aldehyde freshness and pink pepper, backed by the moist aquatic freshness of a floral bouquet. Fresh spring flowers, lily of the valley, cyclamen and lilac, create a radiant floral cloud around their mistress, penetrated by the rays of the sun. A soft and enveloping oriental trail of cashmeran, amber, sandalwood and a seductive musky accord complete the composition.",
    ingredients: {
      topNotes: ["Ozone", "Cashmeran", "Cumin", "Rose"],
      heartNotes: ["Jasmin", "Muguet", "Lilas", "Cyclamen"],
      backgroundNotes: ["Santal", "Musc", "Ambre", "Framboise"]
    },
    available: true,
  }, {
    // dolceGabbana
    id: 2,
    name: "The One for Men Eau de Parfum Dolce&Gabbana for men",
    creator: "Olivier Polge",
    price: 200,
    size: "100ml",
    count: 1,
    category: "perfume",
    image: "https://picsum.photos/200/300",
    description: "The One for Men Eau de Parfum by Dolce&Gabbana is a Woody Spicy fragrance for men. The One for Men Eau de Parfum was launched in 2015. The nose behind this fragrance is Olivier Polge. Top notes are grapefruit, coriander and basil; middle notes are ginger, cardamom and orange blossom; base notes are amber, tobacco and cedar.",
    ingredients: {
      topNotes: ["Grapefruit", "Coriander", "Basil"],
      heartNotes: ["Ginger", "Cardamom", "Orange Blossom"],
      backgroundNotes: ["Amber", "Tobacco", "Cedar"]
    },
    available: true,
  }, {
    //103TiareFlower
    id: 3,
    name: "103 tiare flower, jasmine, hibiscus Bon Parfumeur for women and men",
    creator: "Karine Dubreuil-Sereni",
    price: 150,
    size: "100ml",
    count: 1,
    category: "perfume",
    image: "https://picsum.photos/200/300",
    description: "103 Tiare Flower, Jasmine, Hibiscus by Bon Parfumeur is a Floral fragrance for women and men. 103 tiare flower, jasmine, hibiscus was launched in 2017. The nose behind this fragrance is Karine Dubreuil- Sereni.Top notes are hibiscus, broom and bergamot; middle notes are tiare flower, jasmine sambac, frangipani and neroli; base notes are vanilla, musk and sand.",
    ingredients: {
      topNotes: ["Hibiscus", "Broom", "Bergamot"],
      heartNotes: ["Tiare Flower", "Jasmine", "Frangipani", "Neroli"],
      backgroundNotes: ["Vanilla", "Musk", "Sand"]
    },
    available: true,
  }, {
    // l'InterditGivenchy
    id: 4,
    name: "L'Interdit Eau de Parfum Givenchy for women",
    creator: "Anne Flipo, Dominique Ropion, Fanny Bal",
    price: 150,
    size: "100ml",
    count: 1,
    category: "perfume",
    image: "https://picsum.photos/200/300",
    description: "L'Interdit Eau de Parfum by Givenchy is an Amber Floral fragrance for women. L'Interdit Eau de Parfum was launched in 2018. L'Interdit Eau de Parfum was created by Dominique Ropion, Anne Flipo and Fanny Bal. Top notes are pear and bergamot; middle notes are tuberose, orange blossom and jasmine sambac; base notes are vanilla, patchouli, ambroxan and vetiver.",
    ingredients: {
      topNotes: ["Pear", "Bergamot"],
      heartNotes: ["Tuberose", "Orange Blossom", "Jasmine"],
      backgroundNotes: ["Vanilla", "Patchouli", "Ambroxan", "Vetiver"]
    },
    available: true,
  }, {
    //wildJardins
    id: 5,
    name: "Wilde Jardins d'Ecrivains for women and men",
    creator: "Anais Biguine",
    price: 100,
    size: "100ml",
    count: 1,
    category: "pefume",
    image: "https://picsum.photos/200/300",
    description: "Wilde by Jardins d'Ecrivains is a Aromatic Fruity fragrance for women and men. Wilde was launched in 2013. The nose behind this fragrance is Anais Biguine. Top notes are grapes and bergamot; middle notes are fig, carnation and tea; base notes are vetiver and oakmoss.",
    ingredients: {
      topNotes: ["Grapes", "Bergamot"],
      heartNotes: ["Fig", "Carnation", "Tea"],
      backgroundNotes: ["Vetiver", "Oakmoss"]
    },
    available: true,
  }, {
    //hermessenceCedre
    id: 6,
    name: "Hermessence Cedre Sambac Hermès for women and men",
    creator: "Christine Nagel",
    price: 120,
    size: "100ml",
    count: 1,
    category: "perfume",
    image: "https://picsum.photos/200/300",
    description: "Hermessence Cedre Sambac by Hermès is a Woody Amber fragrance for women and men. Hermessence Cedre Sambac was launched in 2018. The nose behind this fragrance is Christine Nagel.",
    // guess the ingredients 
    ingredients: {
      topNotes: ["Jasam", "Sambacnnman", "manrere"]
    },
    available: true,
  }, {
    id: 7,
    name: "Tobacco Oud Tom Ford for women and men",
    creator: "Olivier Gillotin",
    price: 150,
    size: "100ml",
    count: 1,
    category: "pefume",
    image: "https://picsum.photos/200/300",  
    description: "Tobacco Oud by Tom Ford is a Woody Spicy fragrance for women and men. Tobacco Oud was launched in 2013. The nose behind this fragrance is Olivier Gillotin. Top note is whisky; middle notes are spicy notes, cinnamon and coriander; base notes are tobacco, agarwood (oud), sandalwood, incense, patchouli, benzoin, vanilla and cedar.",
    ingredients: {
      topNotes: ["Whisky", "Spicy Notes", "Cinnamon", "Coriander"],
      heartNotes: ["Tobacco", "Agarwood", "Sandalwood", "Incense", "Patchouli", "Benzoin", "Vanilla", "Cedar"],
      backgroundNotes: ["Tobacco", "Agarwood", "Sandalwood", "Incense", "Patchouli", "Benzoin", "Vanilla", "Cedar"]
    },
    available: true,
  }
];

export const CATEGORIES = ["Perfume", "Skin Care", "Body Care", "deodrant"];

// a =
// a.split[","];// ["Gingembre", "Cardamome", "Fleur d'oranger"]