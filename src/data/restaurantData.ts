import { MenuItem, ChefSpecial, GalleryItem } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: 'MAISON NOIR',
  tagline: 'Where Taste Meets Elegance',
  phone: '+1 (212) 555-0198',
  conciergeEmail: 'concierge@maisonnoir-dining.com',
  reservationsEmail: 'reservations@maisonnoir-dining.com',
  address: '428 Heritage Boulevard, Upper East Side, New York, NY 10021',
  michelinStars: 3,
  accreditations: [
    'Three Michelin Stars (2024–2026)',
    'Wine Spectator Grand Award of Excellence',
    'Relais & Châteaux Grand Chef',
    'World’s 50 Best Gastronomy No. 12',
  ],
  hours: {
    lunch: 'Tuesday – Sunday: 12:00 PM – 2:30 PM',
    dinner: 'Tuesday – Thursday: 5:30 PM – 10:30 PM',
    dinnerWeekend: 'Friday – Sunday: 5:00 PM – 11:30 PM',
    closed: 'Monday: Reserved for Private Cellar Evenings',
  },
  dressCode: 'Elegant Formal Attire. Collared shirts and jackets requested for gentlemen.',
  valet: 'Complimentary white-glove valet service available at the porte-cochère.',
};

export const CHEF_SPECIALS: ChefSpecial[] = [
  {
    id: 'special-wagyu',
    title: 'A5 Miyazaki Wagyu & Périgord Truffle',
    frenchTitle: 'Filet de Bœuf Miyazaki A5 aux Truffes Noires',
    description:
      'Charcoal-seared A5 tenderloin from Miyazaki Prefecture, glazed in 48-hour bone marrow demi-glace, shaved black Périgord winter truffle, and 24-karat Florentine gold leaves.',
    tastingNotes: 'Velvety, buttery umami with earth-forward aromatic truffle finish.',
    winePairing: 'Château Margaux Premier Grand Cru Classé 2015',
    origin: 'Miyazaki, Kyushu, Japan',
    price: 195,
    image: '/src/assets/images/dish_wagyu_truffle_1793523870166.jpg',
  },
  {
    id: 'special-seabass',
    title: 'Chilean Sea Bass & Imperial Oscietra Caviar',
    frenchTitle: 'Loup de Mer Rôti, Velouté de Safran & Caviar Osciètre',
    description:
      'Pan-crisped wild Patagonian toothfish resting in an organic Kashmiri saffron emulsion, wild coastal samphire, cold-pressed green leek oil, and a generous quenelle of Royal Oscietra caviar.',
    tastingNotes: 'Silky, succulent coastal salinity complemented by rich saffron florals.',
    winePairing: 'Domaine Leflaive Puligny-Montrachet 1er Cru 2019',
    origin: 'Southeastern Pacific & Caspian Coast',
    price: 165,
    image: '/src/assets/images/dish_sea_bass_caviar_1793523870378.jpg',
  },
  {
    id: 'special-chocolate',
    title: 'Valrhona Noir Sphere & Salted Amber Praline',
    frenchTitle: 'Sphère de Chocolat Noir Grand Cru, Caramel Coulant & Praliné',
    description:
      'Hand-cast 70% Guanaja chocolate sphere dusted with gold leaf, encapsulating Piedmontese roasted hazelnut biscuit, vanilla bean parfait, cracked open table-side with hot smoked caramel.',
    tastingNotes: 'Deep roasted cocoa bitterness balanced by warm smoked salted caramel.',
    winePairing: 'Château d’Yquem Sauternes 2011 or Vintage Port 2003',
    origin: 'Tain-l’Hermitage, France & Piedmont, Italy',
    price: 52,
    image: '/src/assets/images/dish_chocolate_sphere_1793523871468.jpg',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: 'entree-scallop',
    name: 'Hokkaido Scallop Crudo & Finger Lime',
    frenchName: 'Carpaccio de Saint-Jacques d’Hokkaido au Citron Caviar',
    category: 'entrees',
    description:
      'Sashimi-grade sea scallops thinly carved, infused with white Alba truffle droplets, Australian finger lime pearls, baby shiso, and crystalline sea salt.',
    price: 48,
    image: '/src/assets/images/dish_scallop_crudo_1793523960523.jpg',
    isChefSpecial: true,
    dietary: ['Gluten-Free', 'Pescatarian'],
    winePairing: 'Krug Grande Cuvée 171ème Édition Champagne',
    preparationTime: 'Raw Bar Selection',
  },
  {
    id: 'entree-foie-gras',
    name: 'Pan-Seared Hudson Valley Duck Foie Gras',
    frenchName: 'Foie Gras Poêlé au Poivre de Sichuan & Brioche Tiède',
    category: 'entrees',
    description:
      'Caramelized duck liver accompanied by spiced Mission fig compote, aged balsamic reduction, Sichuan pepper dust, and warm artisanal brioche feuilletée.',
    price: 54,
    image: '/src/assets/images/dish_wagyu_truffle_1793523870166.jpg',
    dietary: ['Signature Classic'],
    winePairing: 'Château Guiraud Sauternes 1er Grand Cru 2016',
  },
  {
    id: 'entree-lobster-bisque',
    name: 'Maine Lobster Consommé & Cognac Foam',
    frenchName: 'Velouté de Homard du Maine Parfumé au Cognac XO',
    category: 'entrees',
    description:
      'Slow-simmered coral reduction with poached lobster claw medallion, tarragon oil droplets, and Hennessy XO emulsion poured tableside.',
    price: 46,
    image: '/src/assets/images/dish_sea_bass_caviar_1793523870378.jpg',
    dietary: ['Pescatarian'],
    winePairing: 'Louis Jadot Meursault 2020',
  },

  // Plats Principaux
  {
    id: 'main-wagyu',
    name: 'A5 Miyazaki Wagyu Tenderloin',
    frenchName: 'Filet de Bœuf Wagyu A5 & Truffes d’Hiver',
    category: 'mains',
    description:
      'Prime Japanese A5 striploin, charred shallot puree, pomme purée robuchon, Périgord black winter truffle, and 24-karat gold leaf.',
    price: 195,
    image: '/src/assets/images/dish_wagyu_truffle_1793523870166.jpg',
    isChefSpecial: true,
    dietary: ['Gluten-Free'],
    winePairing: 'Tenuta San Guido Sassicaia Bolgheri 2018',
  },
  {
    id: 'main-seabass',
    name: 'Wild Chilean Sea Bass Saffron Glaze',
    frenchName: 'Loup de Mer Rôti au Safran & Caviar Royal',
    category: 'mains',
    description:
      'Slow-roasted Patagonian toothfish, saffron fumet, sea asparagus, pickled baby fennel, and Royal Oscietra caviar.',
    price: 165,
    image: '/src/assets/images/dish_sea_bass_caviar_1793523870378.jpg',
    isChefSpecial: true,
    dietary: ['Gluten-Free', 'Pescatarian'],
    winePairing: 'Domaine Dujac Morey-Saint-Denis Blanc 2021',
  },
  {
    id: 'main-duck-canard',
    name: 'Dry-Aged Challandais Duck Breast',
    frenchName: 'Magret de Canard de Challans Affiné au Miel Sauvage',
    category: 'mains',
    description:
      'Lavender-glazed breast with crisp skin, heirloom baby beets, sunchoke mousseline, and sour Morello cherry reduction.',
    price: 120,
    image: '/src/assets/images/dish_wagyu_truffle_1793523870166.jpg',
    dietary: ['Gluten-Free'],
    winePairing: 'Domaine Armand Rousseau Gevrey-Chambertin 2017',
  },

  // Desserts
  {
    id: 'dessert-sphere',
    name: 'Valrhona Noir Chocolate Golden Sphere',
    frenchName: 'Sphère Chocolat Grand Cru Guanaja & Caramel Coulant',
    category: 'desserts',
    description:
      'Bittersweet Valrhona dark chocolate shell, roasted hazelnut crunch, vanilla fleur de sel gelato, and hot salted butter caramel pour.',
    price: 52,
    image: '/src/assets/images/dish_chocolate_sphere_1793523871468.jpg',
    isChefSpecial: true,
    dietary: ['Vegetarian'],
    winePairing: 'Taylor Fladgate 30 Year Tawny Port',
  },
  {
    id: 'dessert-souffle',
    name: 'Madagascar Bourbon Vanilla Bean Soufflé',
    frenchName: 'Soufflé Chaud à la Vanille de Madagascar & Crème Anglaise',
    category: 'desserts',
    description:
      'Airy hot soufflé infused with double-strength bourbon vanilla pods, Grand Marnier mist, and warm spun sugar nest.',
    price: 42,
    image: '/src/assets/images/dish_chocolate_sphere_1793523871468.jpg',
    dietary: ['Vegetarian'],
    winePairing: 'Château Suduiraut Sauternes 2015',
  },

  // Vins & Cocktails
  {
    id: 'drink-old-fashioned',
    name: 'The Maison Smoked Noir Old Fashioned',
    frenchName: 'Le Noir Fumé: Bourbon Rare, Sirop de Truffe & Chêne Toasté',
    category: 'drinks',
    description:
      '20-Year Pappy Van Winkle reserve bourbon, black truffle-infused Demerara syrup, smoked Angostura bitters, flamed orange peel, tableside French oak decanting.',
    price: 65,
    image: '/src/assets/images/cocktail_smoked_old_fashioned_1793523962207.jpg',
    isChefSpecial: true,
    dietary: ['Craft Cocktail'],
    winePairing: 'Signature House Creation',
  },
  {
    id: 'drink-champagne-flight',
    name: 'Prestige Millésimé Champagne Flight',
    frenchName: 'Trilogie de Grands Champagnes de Prestige',
    category: 'drinks',
    description:
      'Tasting pour of Dom Pérignon 2013, Cristal Roederer 2014, and Salon Blanc de Blancs Le Mesnil 2008 with pairing caviar bites.',
    price: 185,
    image: '/src/assets/images/gallery_wine_cellar_1793523873162.jpg',
    dietary: ['Cellar Reserve'],
    winePairing: 'Curated by Master Sommelier',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-dining-room',
    title: 'The Grand Dining Salon',
    category: 'interior',
    categoryLabel: 'The Dining Room',
    image: '/src/assets/images/hero_dining_room_1793523870201.jpg',
    description: 'Intimate candlelit dining salon surrounded by charcoal wainscoting and brass chandeliers.',
  },
  {
    id: 'gal-wine-cellar',
    title: 'The Subterranean Wine Cellar',
    category: 'cellar',
    categoryLabel: 'Wine Cellar',
    image: '/src/assets/images/gallery_wine_cellar_1793523873162.jpg',
    description: 'Over 4,500 references of rare vintages, Grand Crus, and champagne reserves with sommelier tasting lounge.',
  },
  {
    id: 'gal-private-salon',
    title: 'Salon Impérial Private Dining',
    category: 'private',
    categoryLabel: 'Private Salon',
    image: '/src/assets/images/gallery_private_salon_1793523962160.jpg',
    description: 'An exclusive sanctuary accommodating up to 12 guests with dedicated Maître d’ and private culinary service.',
  },
  {
    id: 'gal-wagyu-art',
    title: 'A5 Miyazaki Wagyu Craft',
    category: 'culinary',
    categoryLabel: 'Culinary Art',
    image: '/src/assets/images/dish_wagyu_truffle_1793523870166.jpg',
    description: 'Precision carving of Japanese A5 Miyazaki beef adorned with 24k gold leaf and black winter truffle.',
  },
  {
    id: 'gal-cocktail-craft',
    title: 'The Sommelier Bar & Mixology',
    category: 'interior',
    categoryLabel: 'The Bar',
    image: '/src/assets/images/cocktail_smoked_old_fashioned_1793523962207.jpg',
    description: 'Artisanal cocktails crafted with century-old spirits and botanical aromatics.',
  },
  {
    id: 'gal-dessert-art',
    title: 'The Golden Valrhona Sphere',
    category: 'culinary',
    categoryLabel: 'Culinary Art',
    image: '/src/assets/images/dish_chocolate_sphere_1793523871468.jpg',
    description: 'Hand-sculpted chocolate sphere melted table-side with warm Madagascar caramel.',
  },
];

export const DEGUSTATION_COURSES = [
  {
    course: 'Amuse-Bouche',
    dish: 'Osetra Caviar Pearl on Crispy Brioche with Crème Fraîche',
    pairing: 'Dom Pérignon Vintage 2013',
  },
  {
    course: 'Premier Service',
    dish: 'Hokkaido Scallop Crudo with Australian Finger Lime & Alba Truffle',
    pairing: 'Krug Grande Cuvée 171ème Édition',
  },
  {
    course: 'Deuxième Service',
    dish: 'Hudson Valley Duck Foie Gras Poêlé with Spiced Fig & Warm Brioche',
    pairing: 'Château Guiraud Sauternes 1er Grand Cru 2016',
  },
  {
    course: 'Troisième Service',
    dish: 'Wild Chilean Sea Bass in Golden Saffron Velouté & Samphire',
    pairing: 'Domaine Leflaive Puligny-Montrachet 1er Cru 2019',
  },
  {
    course: 'Plat de Résistance',
    dish: 'A5 Miyazaki Wagyu Tenderloin with Périgord Black Truffle & Robuchon Purée',
    pairing: 'Château Margaux Premier Grand Cru Classé 2015',
  },
  {
    course: 'Fromage Affiné',
    dish: 'Artisanal French & Swiss Cheese Selection, Honeycomb & Truffle Brioche',
    pairing: 'Domaine de la Romanée-Conti Échezeaux 2017',
  },
  {
    course: 'Grand Dessert',
    dish: 'Valrhona Noir Chocolate Golden Sphere with Hot Amber Salted Caramel',
    pairing: 'Château d’Yquem Sauternes 2011',
  },
];
