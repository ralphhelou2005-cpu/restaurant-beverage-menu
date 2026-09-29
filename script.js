const beverages = [
  {
    id: 'beirut-sunset',
    name: 'Beirut Sunset',
    category: 'signature-cocktails',
    categoryLabel: 'Signature Cocktails',
    badge: 'Signature',
    price: 18,
    description: 'A vibrant cocktail inspired by the colours of a Lebanese sunset.',
    ingredients: ['Gin', 'Passion fruit', 'Blood orange', 'Lemon', 'Premium syrup'],
    preparation: 'Shaken and strained into an elegant coupe with a bright citrus finish.',
    origin: 'Lebanon',
    region: 'Beirut',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 98,
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant Coupe / Nick & Nora glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Grilled prawns with saffron butter',
    calories: 220,
    customization: ['No sugar', 'Extra passion fruit', 'Virgin version'],
    accent: 'sunset'
  },
  {
    id: 'cedar-noir',
    name: 'Cedar Noir',
    category: 'signature-cocktails',
    categoryLabel: 'Signature Cocktails',
    badge: 'Best Seller',
    price: 20,
    description: 'A sophisticated Lebanese-inspired cocktail with rich, aromatic notes.',
    ingredients: ['Premium whiskey', 'Cedar-infused syrup', 'Blackberries', 'Lemon', 'Aromatic bitters'],
    preparation: 'Built in a rocks glass over a large cube and finished with a cedar-scented rim.',
    origin: 'Lebanon',
    region: 'Bekaa',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Old Fashioned / Rocks glass',
    allergens: ['None'],
    servingSize: '14 cl',
    pairing: 'Smoked chestnut tartine',
    calories: 260,
    customization: ['Double whiskey', 'No cedar syrup', 'On the rocks'],
    accent: 'dark'
  },
  {
    id: 'mediterranean-breeze',
    name: 'Mediterranean Breeze',
    category: 'signature-cocktails',
    categoryLabel: 'Signature Cocktails',
    badge: 'New',
    price: 18,
    description: 'A refreshing Mediterranean cocktail inspired by the Lebanese coast.',
    ingredients: ['Premium gin', 'Cucumber', 'Fresh mint', 'Lime', 'Elderflower', 'Tonic'],
    preparation: 'Shaken lightly and assembled in a tall highball glass with fresh cucumber ribbons.',
    origin: 'Lebanon',
    region: 'Mediterranean Coast',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 93,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Highball glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Citrus ceviche',
    calories: 180,
    customization: ['No tonic', 'Extra mint', 'Low sugar'],
    accent: 'fresh'
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    badge: 'Signature',
    price: 17,
    description: 'A balanced whiskey cocktail with bitters and a subtle orange finish.',
    ingredients: ['Bourbon', 'Bitters', 'Sugar'],
    preparation: 'Built in an Old Fashioned glass with a large cube and orange twist.',
    origin: 'United States',
    region: 'Kentucky',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Old Fashioned glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Seared steak',
    calories: 210,
    customization: ['Double bourbon', 'Smoked orange', 'No sugar'],
    accent: 'classic'
  },
  {
    id: 'negroni',
    name: 'Negroni',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    badge: 'Best Seller',
    price: 17,
    description: 'A bold, bittersweet aperitif with citrus brightness.',
    ingredients: ['Gin', 'Campari', 'Sweet vermouth'],
    preparation: 'Stirred over ice and served in a rocks glass with relaxed garnish.',
    origin: 'Italy',
    region: 'Florence',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    glassware: 'Rocks glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Charcuterie board',
    calories: 180,
    customization: ['Extra citrus', 'No vermouth', 'Served up'],
    accent: 'classic'
  },
  {
    id: 'margarita',
    name: 'Margarita',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    badge: 'New',
    price: 17,
    description: 'A bright tequila cocktail with lime and orange notes.',
    ingredients: ['Tequila', 'Triple sec', 'Lime'],
    preparation: 'Shaken with fresh lime and served in a chilled margarita or coupe glass.',
    origin: 'Mexico',
    region: 'Jalisco',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 86,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    glassware: 'Margarita / Coupe glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Lime-marinated grilled fish',
    calories: 195,
    customization: ['Frozen', 'Extra lime', 'Salt rim'],
    accent: 'fresh'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    price: 16,
    description: 'A refreshing classic with mint, lime and sparkling refreshment.',
    ingredients: ['White rum', 'Mint', 'Lime', 'Sugar', 'Soda'],
    preparation: 'Muddled mint and lime with sugar, topped with soda in a highball glass.',
    origin: 'Cuba',
    region: 'Havana',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 84,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Highball glass',
    allergens: ['None'],
    servingSize: '11 cl',
    pairing: 'Citrus salad',
    calories: 170,
    customization: ['Extra mint', 'No soda', 'Fresh berries'],
    accent: 'fresh'
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    badge: 'Best Seller',
    price: 18,
    description: 'A velvety coffee-forward cocktail with a clean finish.',
    ingredients: ['Vodka', 'Espresso', 'Coffee liqueur'],
    preparation: 'Shaken hard and poured into a chilled martini coupe.',
    origin: 'United Kingdom',
    region: 'London',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 97,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
    glassware: 'Martini / Coupe glass',
    allergens: ['None'],
    servingSize: '12 cl',
    pairing: 'Dark chocolate tart',
    calories: 240,
    customization: ['Vanilla twist', 'Extra espresso', 'Oat milk froth'],
    accent: 'coffee'
  },
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    category: 'classic-cocktails',
    categoryLabel: 'International Classic Cocktails',
    price: 17,
    description: 'Cranberry and citrus brightness with a polished finish.',
    ingredients: ['Vodka', 'Cranberry', 'Triple sec', 'Lime'],
    preparation: 'Shaken and served up in a chilled martini glass.',
    origin: 'United States',
    region: 'New York',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 80,
    image: 'https://images.unsplash.com/photo-1525267831362-7a5c4d16d0d2?auto=format&fit=crop&w=900&q=80',
    glassware: 'Martini / Coupe glass',
    allergens: ['None'],
    servingSize: '11 cl',
    pairing: 'Crispy calamari',
    calories: 190,
    customization: ['No triple sec', 'Extra lime', 'Sparkling finish'],
    accent: 'classic'
  },
  {
    id: 'musar-red',
    name: 'Château Musar Red',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    badge: 'Signature',
    price: 15,
    bottlePrice: 75,
    description: 'Full-bodied, complex, earthy and distinctly red-fruited with layered elegance.',
    ingredients: ['Cabernet Sauvignon', 'Cinsault', 'Carignan'],
    preparation: 'Aged and bottled for a refined, nuanced profile.',
    origin: 'Lebanon',
    region: 'Bekaa Valley',
    winery: 'Château Musar',
    grape: 'Cabernet Sauvignon · Cinsault · Carignan',
    body: 'Full-bodied',
    flavorProfile: 'Earthy · Red fruit · Spice',
    sweetness: 'Dry',
    acidity: 'Medium-High',
    tannin: 'High',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 96,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Slow-cooked lamb shoulder',
    calories: 120,
    customization: ['Serve at cellar temp', 'Decant'],
    accent: 'red'
  },
  {
    id: 'ksara-reserve',
    name: 'Château Ksara — Reserve du Couvent',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    price: 11,
    bottlePrice: 55,
    description: 'Rich red fruit with a velvety finish and warm spice notes.',
    ingredients: ['Blend of indigenous and international varieties'],
    preparation: 'Balanced and oak-aged for soft tannins and gentle complexity.',
    origin: 'Lebanon',
    region: 'Bekaa',
    winery: 'Château Ksara',
    grape: 'French varietals',
    body: 'Medium-Full',
    flavorProfile: 'Red fruit · Spice · Oak',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'Medium',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 85,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Beef kofta',
    calories: 118,
    customization: ['Decant', 'Serve slightly chilled'],
    accent: 'red'
  },
  {
    id: 'kefraya-comte',
    name: 'Château Kefraya — Comte de M',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    price: 18,
    bottlePrice: 95,
    description: 'Premium full-bodied Lebanese red with layered fruit and polished structure.',
    ingredients: ['Cabernet Sauvignon', 'Merlot'],
    preparation: 'Carefully selected grapes and oak maturation create a refined finish.',
    origin: 'Lebanon',
    region: 'Bekaa Valley',
    winery: 'Château Kefraya',
    grape: 'Cabernet Sauvignon · Merlot',
    body: 'Full-bodied',
    flavorProfile: 'Dark cherry · Cocoa · Cedar',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'High',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Smoked aubergine moussaka',
    calories: 124,
    customization: ['Decant 20 minutes', 'Serve older vintage'],
    accent: 'red'
  },
  {
    id: 'koonunga-hill',
    name: 'Penfolds — Koonunga Hill Shiraz',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    price: 11,
    bottlePrice: 55,
    description: 'A juicy Shiraz with rich berry tones and gentle warmth.',
    ingredients: ['Shiraz'],
    preparation: 'Velvety and accessible with a smooth finish.',
    origin: 'Australia',
    region: 'South Australia',
    winery: 'Penfolds',
    grape: 'Shiraz',
    body: 'Medium-Full',
    flavorProfile: 'Blackberry · Spice · Plum',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'Medium',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 78,
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Roasted vegetable tart',
    calories: 116,
    customization: ['Room temp', 'Double glass'],
    accent: 'red'
  },
  {
    id: 'luigi-bosca-malbec',
    name: 'Luigi Bosca — Malbec',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    price: 12,
    bottlePrice: 60,
    description: 'Dark fruit and soft structure with a satisfying spice finish.',
    ingredients: ['Malbec'],
    preparation: 'Elegant and fruit-led with a polished tannin profile.',
    origin: 'Argentina',
    region: 'Mendoza',
    winery: 'Luigi Bosca',
    grape: 'Malbec',
    body: 'Medium-Full',
    flavorProfile: 'Plum · Cocoa · Spice',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'Medium-High',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 82,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Grilled sirloin',
    calories: 121,
    customization: ['Decant', 'Serve warmer'],
    accent: 'red'
  },
  {
    id: 'masi-campofiorin',
    name: 'Masi — Campofiorin',
    category: 'red-wine',
    categoryLabel: 'Red Wine',
    price: 13,
    bottlePrice: 65,
    description: 'A rich Italian red combining structure, depth and floral character.',
    ingredients: ['Corvina', 'Rondinella'],
    preparation: 'A robust blend with a polished, varietal personality.',
    origin: 'Italy',
    region: 'Veneto',
    winery: 'Masi',
    grape: 'Corvina · Rondinella',
    body: 'Medium-Full',
    flavorProfile: 'Cherry · Violet · Spice',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'Medium',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 79,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bordeaux / Burgundy wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Wild mushroom risotto',
    calories: 120,
    customization: ['Decant', 'Serve slightly chilled'],
    accent: 'red'
  },
  {
    id: 'musar-white',
    name: 'Château Musar White',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 14,
    bottlePrice: 70,
    description: 'Mineral and aromatic with a bright, elegant expression.',
    ingredients: ['Obaideh', 'Merwah'],
    preparation: 'A white wine of freshness and finesse, shaped by the Lebanese hillside.',
    origin: 'Lebanon',
    region: 'Bekaa Valley',
    winery: 'Château Musar',
    grape: 'Obaideh · Merwah',
    body: 'Medium-Bodied',
    flavorProfile: 'Citrus · Mineral · White flower',
    sweetness: 'Dry',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 83,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Sea bass with herbs',
    calories: 110,
    customization: ['Serve chilled', 'No ice'],
    accent: 'white'
  },
  {
    id: 'ksara-chardonnay',
    name: 'Château Ksara — Chardonnay',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 10,
    bottlePrice: 50,
    description: 'Bright and smooth with understated oak and lemony lift.',
    ingredients: ['Chardonnay'],
    preparation: 'A polished Chardonnay with a fresh, layered finish.',
    origin: 'Lebanon',
    region: 'Bekaa',
    winery: 'Château Ksara',
    grape: 'Chardonnay',
    body: 'Medium-Bodied',
    flavorProfile: 'Lemon · Pear · Vanilla',
    sweetness: 'Dry',
    acidity: 'Medium-High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 74,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Chicken shawarma',
    calories: 112,
    customization: ['Chilled', 'Slightly oaked'],
    accent: 'white'
  },
  {
    id: 'kefraya-chardonnay',
    name: 'Château Kefraya — Chardonnay',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 11,
    bottlePrice: 55,
    description: 'Crisp and elegant with ripe stone fruit and balanced oak.',
    ingredients: ['Chardonnay'],
    preparation: 'Modern, smooth and beautifully structured.',
    origin: 'Lebanon',
    region: 'Bekaa Valley',
    winery: 'Château Kefraya',
    grape: 'Chardonnay',
    body: 'Medium-Bodied',
    flavorProfile: 'Peach · Citrus · Vanilla',
    sweetness: 'Dry',
    acidity: 'Medium',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 77,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Herb-crusted salmon',
    calories: 109,
    customization: ['Extra cold', 'No oak'],
    accent: 'white'
  },
  {
    id: 'pinot-grigio',
    name: 'Santa Margherita — Pinot Grigio',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 11,
    bottlePrice: 55,
    description: 'Crisp and aromatic with peach and floral lift.',
    ingredients: ['Pinot Grigio'],
    preparation: 'Clean, refined and refreshing in the glass.',
    origin: 'Italy',
    region: 'Alto Adige',
    winery: 'Santa Margherita',
    grape: 'Pinot Grigio',
    body: 'Light-Medium',
    flavorProfile: 'Pear · Citrus · Blossom',
    sweetness: 'Dry',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 81,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Citrus crab cakes',
    calories: 108,
    customization: ['Serve icy', 'Take with oysters'],
    accent: 'white'
  },
  {
    id: 'cloudy-bay-sauvignon',
    name: 'Cloudy Bay — Sauvignon Blanc',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 16,
    bottlePrice: 85,
    description: 'A vibrant New Zealand classic with tropical refreshment and herbal lift.',
    ingredients: ['Sauvignon Blanc'],
    preparation: 'Crisp and bright with a clean, juicy finish.',
    origin: 'New Zealand',
    region: 'Marlborough',
    winery: 'Cloudy Bay',
    grape: 'Sauvignon Blanc',
    body: 'Light-Medium',
    flavorProfile: 'Grapefruit · Herb · Tropical fruit',
    sweetness: 'Dry',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Fresh burrata and tomato salad',
    calories: 114,
    customization: ['Extra cold', 'Low-foam pour'],
    accent: 'white'
  },
  {
    id: 'jadot-chablis',
    name: 'Louis Jadot — Chablis',
    category: 'white-wine',
    categoryLabel: 'White Wine',
    price: 15,
    bottlePrice: 80,
    description: 'Elegant and mineral-driven with bright citrus and low-oak character.',
    ingredients: ['Chardonnay'],
    preparation: 'A refined and disciplined expression with pure fruit definition.',
    origin: 'France',
    region: 'Burgundy',
    winery: 'Louis Jadot',
    grape: 'Chardonnay',
    body: 'Medium-Bodied',
    flavorProfile: 'Lime · Flint · White flower',
    sweetness: 'Dry',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 87,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    glassware: 'White wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Seared scallops',
    calories: 111,
    customization: ['No oak', 'Cellar-chilled'],
    accent: 'white'
  },
  {
    id: 'ksara-sunset-rose',
    name: 'Château Ksara — Sunset Rosé',
    category: 'rose-wine',
    categoryLabel: 'Rosé Wine',
    price: 9,
    bottlePrice: 45,
    description: 'Soft, dry and graceful with delicate florals and subtle red fruit.',
    ingredients: ['Cinsault', 'Merlot', 'Cabernet Sauvignon'],
    preparation: 'Lightly pressed and cooled for a delicate rosé expression.',
    origin: 'Lebanon',
    region: 'Bekaa',
    winery: 'Château Ksara',
    grape: 'Cinsault · Merlot · Cabernet Sauvignon',
    body: 'Light-Medium',
    flavorProfile: 'Strawberry · Citrus · Rose petal',
    sweetness: 'Dry',
    acidity: 'Medium-High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 73,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant rosé wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Grilled halloumi',
    calories: 105,
    customization: ['Serve very cold', 'Extra citrus'],
    accent: 'rose'
  },
  {
    id: 'whispering-angel',
    name: 'Whispering Angel',
    category: 'rose-wine',
    categoryLabel: 'Rosé Wine',
    price: 14,
    bottlePrice: 75,
    description: 'A polished Provence rosé with delicate fruit and refined texture.',
    ingredients: ['Grenache', 'Cinsault', 'Syrah'],
    preparation: 'Fresh, elegant and softly textured for easy sipping.',
    origin: 'France',
    region: 'Provence',
    winery: 'Whispering Angel',
    grape: 'Grenache · Cinsault · Syrah',
    body: 'Light-Medium',
    flavorProfile: 'Peach · Wild berries · Citrus',
    sweetness: 'Dry',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant rosé wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Charred octopus',
    calories: 107,
    customization: ['Serve chilled', 'Bottle on ice'],
    accent: 'rose'
  },
  {
    id: 'miraval-rose',
    name: 'Miraval Rosé',
    category: 'rose-wine',
    categoryLabel: 'Rosé Wine',
    price: 16,
    bottlePrice: 85,
    description: 'A full-bodied rosé with bright fruit and a graceful finish.',
    ingredients: ['Cinsault', 'Grenache', 'Syrah'],
    preparation: 'Freshly harvested and crafted for a silky yet vibrant finish.',
    origin: 'France',
    region: 'Provence',
    winery: 'Miraval',
    grape: 'Cinsault · Grenache · Syrah',
    body: 'Medium',
    flavorProfile: 'Raspberry · Citrus · Mineral',
    sweetness: 'Dry',
    acidity: 'Medium-High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 87,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant rosé wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Fresh seafood platter',
    calories: 110,
    customization: ['Drink cooler', 'Serve in flute'],
    accent: 'rose'
  },
  {
    id: 'ksara-sparkling',
    name: 'Château Ksara — Sparkling Wine',
    category: 'sparkling-wine',
    categoryLabel: 'Sparkling Wine',
    price: 10,
    bottlePrice: 50,
    description: 'A lively sparkling wine with refined bubbles and citrus elegance.',
    ingredients: ['Local grapes'],
    preparation: 'Crisp, fresh, and celebratory with a clean spark.',
    origin: 'Lebanon',
    region: 'Bekaa',
    winery: 'Château Ksara',
    grape: 'Local blend',
    body: 'Light',
    flavorProfile: 'Citrus · Apple · Floral',
    sweetness: 'Brut',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 71,
    image: 'https://images.unsplash.com/photo-1530638337307-f3004bd921b8?auto=format&fit=crop&w=900&q=80',
    glassware: 'Champagne flute',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Fresh oysters',
    calories: 90,
    customization: ['Extra cold', 'Extra dry'],
    accent: 'sparkling'
  },
  {
    id: 'moet',
    name: 'Moët & Chandon — Brut Impérial',
    category: 'sparkling-wine',
    categoryLabel: 'Sparkling Wine',
    price: 22,
    bottlePrice: 120,
    description: 'A classic sparkling expression with fine fruit and elegant finish.',
    ingredients: ['Pinot Noir', 'Chardonnay', 'Meunier'],
    preparation: 'A celebratory Champagne with creamy bead and lifted fruit.',
    origin: 'France',
    region: 'Champagne',
    winery: 'Moët & Chandon',
    grape: 'Pinot Noir · Chardonnay · Meunier',
    body: 'Light-Medium',
    flavorProfile: 'Apple · Citrus · Brioche',
    sweetness: 'Brut',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 94,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    glassware: 'Champagne flute',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Smoked salmon canapés',
    calories: 95,
    customization: ['Extra dry', 'Serve in coupe'],
    accent: 'sparkling'
  },
  {
    id: 'veuve-clicquot',
    name: 'Veuve Clicquot — Yellow Label',
    category: 'sparkling-wine',
    categoryLabel: 'Sparkling Wine',
    price: 24,
    bottlePrice: 130,
    description: 'Signature Champagne with generous fruits and a vibrant finish.',
    ingredients: ['Pinot Noir', 'Chardonnay', 'Meunier'],
    preparation: 'Elegant and rich with fine bubbles and lively structure.',
    origin: 'France',
    region: 'Champagne',
    winery: 'Veuve Clicquot',
    grape: 'Pinot Noir · Chardonnay · Meunier',
    body: 'Medium',
    flavorProfile: 'Brioche · Pear · Citrus',
    sweetness: 'Brut',
    acidity: 'High',
    tannin: 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: false,
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e8e6?auto=format&fit=crop&w=900&q=80',
    glassware: 'Champagne flute',
    allergens: ['Sulphites'],
    servingSize: '150 ml',
    pairing: 'Fresh seafood tower',
    calories: 96,
    customization: ['Classic flute', 'Low sugar'],
    accent: 'sparkling'
  },
  {
    id: 'almaza-pilsner',
    name: 'Almaza Pilsner',
    category: 'beer',
    categoryLabel: 'Beer',
    price: 7,
    description: 'A crisp local pilsner with a balanced malt finish.',
    ingredients: ['Barley', 'Hops'],
    preparation: 'Light, hoppy and easy-drinking.',
    origin: 'Lebanon',
    region: 'Beirut',
    brand: 'Almaza',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 82,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=900&q=80',
    glassware: 'Beer bottle / pilsner glass',
    allergens: ['Gluten'],
    servingSize: '330 ml',
    pairing: 'Fattoush and mezze',
    calories: 155,
    customization: ['Serve cold', 'Beer tower'],
    accent: 'beer'
  },
  {
    id: 'almaza-na',
    name: 'Almaza Non-Alcoholic',
    category: 'beer',
    categoryLabel: 'Beer',
    price: 7,
    description: 'A refreshing local non-alcoholic beer with a clean, crisp finish.',
    ingredients: ['Barley', 'Hops'],
    preparation: 'Brewed for lightness and easy drinking.',
    origin: 'Lebanon',
    region: 'Beirut',
    brand: 'Almaza',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 69,
    image: 'https://images.unsplash.com/photo-1598214015720-4df6a87a84e2?auto=format&fit=crop&w=900&q=80',
    glassware: 'Beer bottle / pilsner glass',
    allergens: ['Gluten'],
    servingSize: '330 ml',
    pairing: 'Light mezze',
    calories: 70,
    customization: ['Extra cold', 'Zero-proof'],
    accent: 'beer'
  },
  {
    id: 'corona-extra',
    name: 'Corona Extra',
    category: 'beer',
    categoryLabel: 'Beer',
    price: 9,
    description: 'A crisp, clean Mexican lager with a light citrus finish.',
    ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled with a classic refreshing snap.',
    origin: 'Mexico',
    region: 'N/A',
    brand: 'Corona',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 80,
    image: 'https://images.unsplash.com/photo-1558642891-54be180ea339?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / beer glass',
    allergens: ['Gluten'],
    servingSize: '330 ml',
    pairing: 'Grilled seafood',
    calories: 148,
    customization: ['Lime wedge', 'Serve cold'],
    accent: 'beer'
  },
  {
    id: 'heineken',
    name: 'Heineken',
    category: 'beer',
    categoryLabel: 'Beer',
    price: 9,
    description: 'A crisp lager with balanced malt and a smooth finish.',
    ingredients: ['Barley', 'Hops'],
    preparation: 'Fresh and clean, ideal with Lebanese mezze.',
    origin: 'Netherlands',
    region: 'Amsterdam',
    brand: 'Heineken',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 75,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / beer glass',
    allergens: ['Gluten'],
    servingSize: '330 ml',
    pairing: 'Bites and mezze',
    calories: 150,
    customization: ['Extra cold', 'No garnish'],
    accent: 'beer'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 4,
    description: 'A small, intense espresso with rich crema and aromatic depth.',
    ingredients: ['Arabica beans'],
    preparation: 'Double-shot extraction for a concentrated espresso finish.',
    origin: 'Brazil / Ethiopia blend',
    region: 'South America / East Africa',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 86,
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    glassware: 'Small espresso cup',
    allergens: ['None'],
    servingSize: '30 ml',
    pairing: 'Dark chocolate',
    calories: 5,
    customization: ['Extra shot', 'Decaf'],
    accent: 'coffee'
  },
  {
    id: 'doppio',
    name: 'Doppio Espresso',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 5,
    description: 'A double espresso with a fuller body and a darker finish.',
    ingredients: ['Arabica beans'],
    preparation: 'Double extraction in a premium espresso cup.',
    origin: 'Ethiopia / Brazil',
    region: 'Blend',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 82,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    glassware: 'Double espresso cup',
    allergens: ['None'],
    servingSize: '60 ml',
    pairing: 'Vanilla biscuit',
    calories: 10,
    customization: ['Extra crema', 'Decaf'],
    accent: 'coffee'
  },
  {
    id: 'decaf-espresso',
    name: 'Decaf Espresso',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 4.5,
    description: 'A smooth decaf espresso with the same aromatic character.',
    ingredients: ['Decaf Arabica'],
    preparation: 'Crafted to retain flavour while reducing caffeine.',
    origin: 'Latin America',
    region: 'Blend',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 68,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    glassware: 'Espresso cup',
    allergens: ['None'],
    servingSize: '30 ml',
    pairing: 'Mille-feuille',
    calories: 6,
    customization: ['Extra shot', 'Camelina roast'],
    accent: 'coffee'
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 5,
    description: 'A smooth, mellow coffee with soft crema and rounded depth.',
    ingredients: ['Espresso', 'Hot water'],
    preparation: 'Carefully diluted to a balanced, aromatic cup.',
    origin: 'Arabica blend',
    region: 'Blend',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 72,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium ceramic coffee cup',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Almond pastry',
    calories: 12,
    customization: ['Double espresso', 'Cold'],
    accent: 'coffee'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'coffee',
    categoryLabel: 'Coffee',
    price: 6,
    description: 'Classic cappuccino with fluffy foam and rich espresso balance.',
    ingredients: ['Espresso', 'Milk foam'],
    preparation: 'Crafted in a traditional cappuccino cup with silky foam.',
    origin: 'Italy',
    region: 'Classic espresso culture',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: false,
    popularity: 91,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    glassware: 'Traditional cappuccino cup',
    allergens: ['Milk'],
    servingSize: '250 ml',
    pairing: 'Baklava or croissant',
    calories: 130,
    customization: ['Oat milk', 'Extra foam', 'Caramel'],
    accent: 'coffee'
  },
  {
    id: 'english-breakfast',
    name: 'English Breakfast',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 5,
    description: 'A robust black tea with full body and malty warmth.',
    ingredients: ['Black tea leaves'],
    preparation: 'Steeped gently in an elegant teacup.',
    origin: 'United Kingdom',
    region: 'Assam / Ceylon',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 78,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant teacup',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Shortbread',
    calories: 8,
    customization: ['Lemon', 'Milk'],
    accent: 'tea'
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 5,
    description: 'Light, fresh and subtly grassy with a clean finish.',
    ingredients: ['Green tea leaves'],
    preparation: 'Brewed delicately in a porcelain teacup.',
    origin: 'China / Japan',
    region: 'Mountain plantation',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 75,
    image: 'https://images.unsplash.com/photo-1530667713556-7d98687d2d05?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant tea glass or teacup',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Sesame biscuits',
    calories: 7,
    customization: ['Lemon', 'Ginger'],
    accent: 'tea'
  },
  {
    id: 'earl-grey',
    name: 'Earl Grey',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 5,
    description: 'A fragrant black tea with bergamot brightness and floral nuance.',
    ingredients: ['Black tea', 'Bergamot'],
    preparation: 'Infused in a premium teacup with a fragrant citrus lift.',
    origin: 'United Kingdom',
    region: 'London',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 81,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium teacup',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Lemon cake',
    calories: 8,
    customization: ['No bergamot', 'Milk'],
    accent: 'tea'
  },
  {
    id: 'moroccan-mint-tea',
    name: 'Moroccan Mint Tea',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 6,
    description: 'Sweet, aromatic mint tea served in the traditional Moroccan ritual.',
    ingredients: ['Green tea', 'Fresh mint', 'Sugar'],
    preparation: 'Poured from a teapot into traditional Moroccan glasses with fresh mint.',
    origin: 'Morocco',
    region: 'Rabat',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=900&q=80',
    glassware: 'Traditional Moroccan tea glasses + teapot',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Baklava and dates',
    calories: 55,
    customization: ['Less sugar', 'Extra mint'],
    accent: 'tea'
  },
  {
    id: 'chamomile',
    name: 'Chamomile',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 5,
    description: 'Gentle floral infusion with a soothing, calming finish.',
    ingredients: ['Chamomile flowers'],
    preparation: 'Steeped gently in a transparent tea glass.',
    origin: 'Mediterranean',
    region: 'Herbal infusion',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 66,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    glassware: 'Transparent tea glass',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Honey cake',
    calories: 4,
    customization: ['Honey', 'Lemon'],
    accent: 'tea'
  },
  {
    id: 'fresh-ginger-tea',
    name: 'Fresh Ginger Tea',
    category: 'tea',
    categoryLabel: 'Tea',
    price: 6,
    description: 'A warming infusion of fresh ginger and lemon.',
    ingredients: ['Ginger', 'Lemon', 'Tea'],
    preparation: 'Steeped with fresh ginger and a bright lemon finish.',
    origin: 'Lebanon',
    region: 'Fresh herbal infusion',
    temperature: 'hot',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    glassware: 'Transparent glass with ginger and lemon',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Sesame cake',
    calories: 18,
    customization: ['Extra ginger', 'Honey'],
    accent: 'tea'
  },
  {
    id: 'fresh-orange',
    name: 'Fresh Orange Juice',
    category: 'fresh-juices',
    categoryLabel: 'Fresh Juices',
    price: 7,
    description: 'Freshly squeezed orange juice with bright, sweet citrus character.',
    ingredients: ['Oranges'],
    preparation: 'Pressed fresh and served over good ice in a premium juice glass.',
    origin: 'Lebanon',
    region: 'Freshly pressed',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall premium juice glass',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Breakfast pastries',
    calories: 110,
    customization: ['No ice', 'Light pulp'],
    accent: 'juice'
  },
  {
    id: 'fresh-lemonade',
    name: 'Fresh Lemonade',
    category: 'fresh-juices',
    categoryLabel: 'Fresh Juices',
    price: 7,
    description: 'Fresh lemon, water and premium syrup balancing citrus brightness.',
    ingredients: ['Lemon', 'Water', 'Premium syrup'],
    preparation: 'Lightly sweetened and served chilled in a tall transparent glass.',
    origin: 'Lebanon',
    region: 'Freshly prepared',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 77,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall transparent glass',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Light brunch items',
    calories: 95,
    customization: ['Less syrup', 'Mint'],
    accent: 'juice'
  },
  {
    id: 'coke',
    name: 'Coca-Cola',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'Classic cola with a familiar sparkle and balanced sweetness.',
    ingredients: ['Carbonated soft drink'],
    preparation: 'Served chilled with the signature soda fizz.',
    origin: 'United States',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 70,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f2b7420a?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Cheeseburger',
    calories: 140,
    customization: ['No ice', 'Bottle version'],
    accent: 'soft'
  },
  {
    id: 'coke-zero',
    name: 'Coca-Cola Zero',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'A lighter zero-sugar cola with the same classic flavour profile.',
    ingredients: ['Zero-sugar cola'],
    preparation: 'Chilled and served with a crisp finish.',
    origin: 'United States',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 64,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Light snacks',
    calories: 0,
    customization: ['No ice', 'Bottle version'],
    accent: 'soft'
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'A crisp, bubbly classic with a sweet, refreshing finish.',
    ingredients: ['Carbonated cola'],
    preparation: 'Served chilled over ice for a fresh finish.',
    origin: 'United States',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 63,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Casual bites',
    calories: 140,
    customization: ['No ice'],
    accent: 'soft'
  },
  {
    id: 'pepsi-zero',
    name: 'Pepsi Zero',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'Zero-sugar cola with the familiar bubbly profile.',
    ingredients: ['Zero-sugar cola'],
    preparation: 'Served iced and crisp.',
    origin: 'United States',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 60,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Fast bites',
    calories: 0,
    customization: ['No ice'],
    accent: 'soft'
  },
  {
    id: 'sprite',
    name: 'Sprite',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'Crisp lemon-lime sparkle with a refreshing finish.',
    ingredients: ['Lemon-lime soda'],
    preparation: 'Served chilled and bubbly.',
    origin: 'United States',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 68,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f2b7420a?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Fried appetizers',
    calories: 130,
    customization: ['No ice'],
    accent: 'soft'
  },
  {
    id: 'fanta',
    name: 'Fanta',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 4,
    description: 'Bright citrus soda with a playful, fruity finish.',
    ingredients: ['Orange soda'],
    preparation: 'Served icy and refreshing.',
    origin: 'Germany',
    region: 'Global classic',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 56,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    glassware: 'Tall glass with ice',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Desserts',
    calories: 130,
    customization: ['No ice'],
    accent: 'soft'
  },
  {
    id: 'tonic-water',
    name: 'Tonic Water',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 5,
    description: 'A crisp, bitter-sweet sparkling tonic with a citrus edge.',
    ingredients: ['Carbonated water', 'Quinine'],
    preparation: 'Served with plenty of ice.',
    origin: 'Global',
    region: 'Classic mixer',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 59,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant glass with ice',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Citrus cocktails',
    calories: 70,
    customization: ['Lime slice'],
    accent: 'soft'
  },
  {
    id: 'ginger-ale',
    name: 'Ginger Ale',
    category: 'soft-drinks',
    categoryLabel: 'Soft Drinks',
    price: 5,
    description: 'A zesty, refreshing ginger soda with a gentle sparkle.',
    ingredients: ['Ginger', 'Carbonated water'],
    preparation: 'Served chilled to a clean, aromatic finish.',
    origin: 'Canada',
    region: 'Classic mixer',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 58,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    glassware: 'Elegant glass with ice',
    allergens: ['None'],
    servingSize: '250 ml',
    pairing: 'Spicy dishes',
    calories: 80,
    customization: ['Lime', 'Mint'],
    accent: 'soft'
  },
  {
    id: 'water-still-33',
    name: 'Still Water — 33cl',
    category: 'water',
    categoryLabel: 'Water',
    price: 3,
    description: 'Pure mineral water in a crisp, premium presentation.',
    ingredients: ['Mineral water'],
    preparation: 'Served chilled in a refined bottle or glass.',
    origin: 'Lebanon',
    region: 'Mineral spring',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 85,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium water bottle / elegant glass',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'Any dish',
    calories: 0,
    customization: ['Ice', 'Lemon slice'],
    accent: 'water'
  },
  {
    id: 'water-still-1l',
    name: 'Still Water — 1L',
    category: 'water',
    categoryLabel: 'Water',
    price: 8,
    description: 'Large-format still water for table service and sharing.',
    ingredients: ['Mineral water'],
    preparation: 'Poured fresh and elegantly presented.',
    origin: 'Lebanon',
    region: 'Mineral spring',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium water bottle / elegant glass',
    allergens: ['None'],
    servingSize: '1L',
    pairing: 'Every plate',
    calories: 0,
    customization: ['Add lemon', 'Sparkling version'],
    accent: 'water'
  },
  {
    id: 'water-sparkling-small',
    name: 'Sparkling Water — Small',
    category: 'water',
    categoryLabel: 'Water',
    price: 5,
    description: 'A light sparkling mineral water to refresh and cleanse the palate.',
    ingredients: ['Sparkling water'],
    preparation: 'Chilled and elegantly presented.',
    origin: 'Lebanon',
    region: 'Mineral spring',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 79,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium sparkling water glass',
    allergens: ['None'],
    servingSize: '330 ml',
    pairing: 'All courses',
    calories: 0,
    customization: ['Lime slice'],
    accent: 'water'
  },
  {
    id: 'water-sparkling-large',
    name: 'Sparkling Water — Large',
    category: 'water',
    categoryLabel: 'Water',
    price: 9,
    description: 'Large sparkling water bottle with a crisp mineral finish.',
    ingredients: ['Sparkling water'],
    preparation: 'Served chilled with a premium sparkle.',
    origin: 'Lebanon',
    region: 'Mineral spring',
    temperature: 'cold',
    alcohol: 'non-alcoholic',
    vegan: true,
    popularity: 84,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80',
    glassware: 'Premium sparkling water bottle / glass',
    allergens: ['None'],
    servingSize: '1L',
    pairing: 'Every course',
    calories: 0,
    customization: ['Lemon slice'],
    accent: 'water'
  }
];

const replacedCategories = new Set([
  'red-wine', 'white-wine', 'rose-wine', 'sparkling-wine', 'beer', 'tea', 'soft-drinks'
]);
const existingWineImages = beverages
  .filter((item) => item.category.includes('wine'))
  .map((item) => item.image);

const requestedWines = [
  ['vernaccia-2022', 'Vernaccia di San Gimignano, 2022', 'white-wine', 'Italy', 'Toscana', 110],
  ['villa-antinori-2023', 'Villa Antinori, 2023', 'white-wine', 'Italy', 'Toscana', 60],
  ['astoria-pinot-grigio-2024', 'Astoria Pinot Grigio, 2024', 'white-wine', 'Italy', 'Toscana', 50],
  ['karam-cloud-9-2023', 'Karam Cloud 9, 2023', 'white-wine', 'Lebanon', 'Jezzine', 40],
  ['st-thomas-obeidy-2023', 'St-Thomas Obeidy, 2023', 'white-wine', 'Lebanon', 'Bekaa', 40],
  ['ksara-merwah-2023', 'Ksara Merwah, 2023', 'white-wine', 'Lebanon', 'Bekaa', 45],
  ['fines-roches-2020', 'Châteauneuf-du-Pape, Château des Fines Roches, 2020', 'red-wine', 'France', 'Vallée du Rhône', 85],
  ['les-fiefs-lagrange-2018', 'Saint-Julien, Les Fiefs de Lagrange, 2018', 'red-wine', 'France', 'Bordeaux', 95],
  ['villa-al-cortile-2019', 'Villa al Cortile Brunello di Montalcino, 2019', 'red-wine', 'Italy', 'Toscana', 115],
  ['st-thomas-les-emirs-2018', 'St-Thomas Les Emirs, 2018', 'red-wine', 'Lebanon', 'Bekaa', 40],
  ['ksara-carignan-2021', 'Ksara Carignan, 2021', 'red-wine', 'Lebanon', 'Bekaa', 40],
  ['muse-le-rouge-2019', 'Muse Le Rouge, 2019', 'red-wine', 'Lebanon', 'Ainata', 40],
  ['madregale-rose-2023', 'Madregale, 2023', 'rose-wine', 'Italy', 'Terre di Chieti', 50],
  ['castel-cotes-provence-2021', 'Castel Côtes de Provence, 2021', 'rose-wine', 'France', 'Côtes de Provence', 40],
  ['st-thomas-noor-el-ein', 'St Thomas Noor El Ein', 'rose-wine', 'Lebanon', 'Bekaa', 45],
  ['astoria-tiemo', 'Astoria Tiëmo', 'sparkling-wine', 'Italy', 'Treviso', 50],
  ['latourba-unique', 'Latourba Unique Blanc de Blanc, Brut', 'sparkling-wine', 'Lebanon', 'West Bekaa Valley', 75],
  ['latourba-kristina', 'Latourba Kristina Rosé Brut, Cuvée Spéciale', 'sparkling-wine', 'Lebanon', 'West Bekaa Valley', 75]
].map(([id, name, category, origin, region, listedBottlePrice], index) => {
  const bottlePrice = Math.ceil(listedBottlePrice * 1.08);
  const glassPrice = Math.ceil(bottlePrice / 5);
  return {
    id,
    name,
    category,
    categoryLabel:
      category === 'white-wine'
        ? 'White Wine'
        : category === 'red-wine'
          ? 'Red Wine'
          : category === 'rose-wine'
            ? 'Rosé Wine'
            : 'Sparkling Wine',
    price: glassPrice,
    glassPrice,
    bottlePrice,
    description: `${region} · ${origin}`,
    ingredients: ['Wine grapes'],
    preparation: 'Served at the recommended temperature.',
    origin,
    region,
    winery: name.split(',')[0],
    grape: 'Ask our team',
    body: 'Ask our team',
    flavorProfile: `${region} · ${origin}`,
    sweetness: 'Dry',
    acidity: 'Balanced',
    tannin: category === 'red-wine' ? 'Present' : 'Low',
    temperature: 'cold',
    alcohol: 'alcoholic',
    vegan: true,
    popularity: 80 - index,
    image: existingWineImages[index % existingWineImages.length],
    glassware: 'Wine glass',
    allergens: ['Sulphites'],
    servingSize: '150 ml glass',
    pairing: 'Ask our team for a pairing',
    calories: 120,
    customization: ['Glass', 'Bottle'],
    accent: category
  };
});

const requestedOtherDrinks = [
  {
    id: 'gin-basil', name: 'Gin Basil', category: 'classic-cocktails', categoryLabel: 'International Classic Cocktails',
    price: 17, description: 'A fresh, aromatic gin cocktail with basil and bright citrus.',
    ingredients: ['Gin', 'Fresh basil', 'Lemon', 'Simple syrup'],
    preparation: 'Shaken with fresh basil and served chilled.', origin: 'Classic cocktail', region: 'House preparation',
    temperature: 'cold', alcohol: 'alcoholic', vegan: true, popularity: 89,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    glassware: 'Coupe glass', allergens: ['None'], servingSize: '12 cl', pairing: 'Fresh mezze', calories: 180,
    customization: ['Extra basil', 'Less sweet', 'Extra lemon'], accent: 'fresh'
  },
  {
    id: 'almaza', name: 'Almaza', category: 'beer', categoryLabel: 'Beer', price: 7,
    description: 'A crisp Lebanese pilsner with a light malt finish.', ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled.', origin: 'Lebanon', region: 'Beirut', brand: 'Almaza', temperature: 'cold',
    alcohol: 'alcoholic', vegan: true, popularity: 82,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / pilsner glass', allergens: ['Gluten'], servingSize: '330 ml', pairing: 'Mezze', calories: 155,
    customization: ['Serve cold'], accent: 'beer'
  },
  {
    id: 'almaza-light', name: 'Almaza Light', category: 'beer', categoryLabel: 'Beer', price: 7,
    description: 'A lighter Lebanese lager with a clean, refreshing finish.', ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled.', origin: 'Lebanon', region: 'Beirut', brand: 'Almaza', temperature: 'cold',
    alcohol: 'alcoholic', vegan: true, popularity: 76,
    image: 'https://images.unsplash.com/photo-1558642891-54be180ea339?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / pilsner glass', allergens: ['Gluten'], servingSize: '330 ml', pairing: 'Grilled seafood', calories: 120,
    customization: ['Serve cold'], accent: 'beer'
  },
  {
    id: 'beirut-beer', name: 'Beirut Beer', category: 'beer', categoryLabel: 'Beer', price: 7,
    description: 'A locally brewed Lebanese beer with a balanced, easy-drinking character.', ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled.', origin: 'Lebanon', region: 'Beirut', brand: 'Beirut Beer', temperature: 'cold',
    alcohol: 'alcoholic', vegan: true, popularity: 73,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / pilsner glass', allergens: ['Gluten'], servingSize: '330 ml', pairing: 'Grilled meats', calories: 145,
    customization: ['Serve cold'], accent: 'beer'
  },
  {
    id: 'heineken', name: 'Heineken', category: 'beer', categoryLabel: 'Beer', price: 9,
    description: 'A crisp imported lager with balanced malt and a smooth finish.', ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled.', origin: 'Netherlands', region: 'Amsterdam', brand: 'Heineken', temperature: 'cold',
    alcohol: 'alcoholic', vegan: true, popularity: 75,
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / beer glass', allergens: ['Gluten'], servingSize: '330 ml', pairing: 'Bites and mezze', calories: 150,
    customization: ['Serve cold'], accent: 'beer'
  },
  {
    id: 'corona', name: 'Corona', category: 'beer', categoryLabel: 'Beer', price: 9,
    description: 'A crisp imported Mexican lager with a light citrus finish.', ingredients: ['Barley', 'Hops'],
    preparation: 'Served chilled with lime on request.', origin: 'Mexico', region: 'Mexico', brand: 'Corona', temperature: 'cold',
    alcohol: 'alcoholic', vegan: true, popularity: 80,
    image: 'https://images.unsplash.com/photo-1558642891-54be180ea339?auto=format&fit=crop&w=900&q=80',
    glassware: 'Bottle / beer glass', allergens: ['Gluten'], servingSize: '330 ml', pairing: 'Grilled seafood', calories: 148,
    customization: ['Lime wedge', 'Serve cold'], accent: 'beer'
  },
  {
    id: 'tea', name: 'Tea', category: 'tea', categoryLabel: 'Tea', price: 5,
    description: 'A freshly brewed cup of tea.', ingredients: ['Tea'], preparation: 'Brewed to order.', origin: 'House selection',
    region: 'Ask for today’s selection', temperature: 'hot', alcohol: 'non-alcoholic', vegan: true, popularity: 78,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    glassware: 'Teacup', allergens: ['None'], servingSize: '250 ml', pairing: 'Dessert', calories: 8,
    customization: ['Milk', 'Lemon'], accent: 'tea'
  },
  {
    id: 'soft-drinks', name: 'Soft Drinks', category: 'soft-drinks', categoryLabel: 'Soft Drinks', price: 4,
    description: 'Ask your server for the available soft drinks.', ingredients: ['Selection varies'],
    preparation: 'Served chilled.', origin: 'Selection varies', region: 'Ask your server', temperature: 'cold',
    alcohol: 'non-alcoholic', vegan: true, popularity: 70,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
     allergens: ['Ask your server'], servingSize: '330 ml', pairing: 'Any course', calories: 140,
    customization: ['Ask for available options'], accent: 'soft'
  }
];

beverages.splice(
  0,
  beverages.length,
  ...beverages.filter((item) => !replacedCategories.has(item.category) && item.id !== 'cosmopolitan'),
  ...requestedWines,
  ...requestedOtherDrinks
);

const categoryOrder = [
  'red-wine',
  'white-wine',
  'rose-wine',
  'sparkling-wine',
  'beer',
  'signature-cocktails',
  'classic-cocktails',
  'coffee',
  'tea',
  'fresh-juices',
  'soft-drinks',
  'water'
];

const state = {
  query: '',
  category: 'all',
  temp: 'all',
  alcohol: 'all',
  vegan: 'all',
  sort: 'popularity'
};

const navMap = {
  'signature-cocktails': 'cocktails',
  'classic-cocktails': 'cocktails',
  'red-wine': 'wine',
  'white-wine': 'wine',
  'rose-wine': 'wine',
  'sparkling-wine': 'wine',
  'beer': 'beer',
  'coffee': 'coffee-tea',
  'tea': 'coffee-tea',
  'fresh-juices': 'menu',
  'soft-drinks': 'menu',
  'water': 'menu'
};

const PRICE_ADJUSTMENT = 0.88;
const formatPrice = (price) => `$${(Number(price) * PRICE_ADJUSTMENT).toFixed(2)}`;

function getSortedItems(items) {
  const sorted = [...items];
  if (state.sort === 'price-asc') return sorted.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') return sorted.sort((a, b) => b.price - a.price);
  return sorted.sort((a, b) => b.popularity - a.popularity);
}

function getFilteredItems() {
  const normalizedQuery = state.query.trim().toLowerCase();

  const filtered = beverages.filter((item) => {
    const matchesQuery = !normalizedQuery || item.name.toLowerCase().includes(normalizedQuery);
    const matchesCategory = state.category === 'all' || item.category === state.category;
    const matchesTemp = state.temp === 'all' || item.temperature === state.temp;
    const matchesAlcohol = state.alcohol === 'all' || item.alcohol === state.alcohol;
    const matchesVegan =
      state.vegan === 'all' ||
      (state.vegan === 'vegan' && item.vegan) ||
      (state.vegan === 'non-vegan' && !item.vegan);

    return matchesQuery && matchesCategory && matchesTemp && matchesAlcohol && matchesVegan;
  });

  return getSortedItems(filtered);
}

function renderCategoryOptions() {
  const select = document.getElementById('categoryFilter');
  const options = categoryOrder.map((category) => ({
    value: category,
    label: beverages.find((item) => item.category === category)?.categoryLabel || category
  }));

  select.innerHTML = ['<option value="all">All categories</option>']
    .concat(options.map((option) => `<option value="${option.value}">${option.label}</option>`))
    .join('');

  select.value = state.category;
}

function renderSignatureCards() {
  const featureGrid = document.getElementById('feature-grid');
  const signatureItems = beverages.filter((item) => item.category === 'signature-cocktails');

  featureGrid.innerHTML = signatureItems
    .map(
      (item) => `
        <article class="feature-card" data-id="${item.id}" tabindex="0" aria-label="View ${item.name} details">
          <div class="feature-content">
            <span class="feature-index">${String(signatureItems.indexOf(item) + 1).padStart(2, '0')}</span>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="feature-link">Discover this pour</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderBeverageCard(item) {
  const isWine = item.category.includes('wine');
  const badges = [item.badge, item.temperature === 'hot' ? '🔥 Served Hot' : '❄️ Served Cold']
    .filter(Boolean)
    .map((label) => {
      const badgeClass =
        label === 'Best Seller'
          ? 'best-seller'
          : label === 'New'
            ? 'new'
            : label === 'Signature'
              ? 'signature'
              : label === '🌱 Vegan'
                ? 'vegan'
                : label === '🔥 Served Hot'
                  ? 'hot'
                  : 'cold';

      return `<span class="badge ${badgeClass}">${label}</span>`;
    })
    .join('');

  const wineDetail = isWine
    ? `
        <div class="wine-meta">
          <span class="wine-origin-label">${item.origin === 'Lebanon' ? 'Local' : 'Imported'} · ${item.origin}</span>
          <span><strong>Region:</strong> ${item.region}</span>
        </div>
        <div class="wine-body">
          <strong>${item.winery}</strong><br>
          ${item.description}
        </div>
      `
    : '';

  const cardExtra = isWine
    ? `
        <div class="wine-footer">
          <div class="wine-prices">
            <span>Glass <strong>$${item.glassPrice}</strong></span>
            <span>Bottle <strong>$${item.bottlePrice}</strong></span>
          </div>
          <button class="card-action" type="button" data-id="${item.id}">Details</button>
        </div>
      `
    : `
        <div class="price-row">
          <span class="price-value">${formatPrice(item.price)}</span>
          <span class="temp-pill">${item.temperature === 'hot' ? 'Hot' : 'Cold'}</span>
        </div>
        <div class="meta-row">
          <span class="category-tag">${item.categoryLabel}</span>
          <button class="card-action" type="button" data-id="${item.id}">View details</button>
        </div>
      `;

  return `
    <article class="beverage-card ${isWine ? 'wine-card' : ''}" data-id="${item.id}" tabindex="0" aria-label="View ${item.name}">
      <div class="card-body">
        <div class="badge-row">${badges}</div>
        <h3>${item.name}</h3>
        <p class="card-description">${item.description}</p>
        ${wineDetail}
        ${cardExtra}
      </div>
    </article>
  `;
}

function renderMenuSections() {
  const menuContainer = document.getElementById('menu-sections');
  const filtered = getFilteredItems();
  const sectionMap = [
    {
      id: 'wine',
      title: 'Wine',
      categories: ['red-wine', 'white-wine', 'rose-wine', 'sparkling-wine'],
      subsections: [
        { category: 'red-wine', title: 'Red Wine' },
        { category: 'white-wine', title: 'White Wine' },
        { category: 'rose-wine', title: 'Rosé' },
        { category: 'sparkling-wine', title: 'Sparkling Wine' }
      ]
    },
    { id: 'beer', title: 'Beer', categories: ['beer'] },
    { id: 'cocktails', title: 'Cocktails', categories: ['signature-cocktails', 'classic-cocktails'] },
    { id: 'coffee-tea', title: 'Coffee & Tea', categories: ['coffee', 'tea'] },
    { id: 'more-drinks', title: 'Soft Drinks & Refreshments', categories: ['soft-drinks', 'fresh-juices', 'water'] }
  ];

  const grouped = sectionMap
    .map((section) => ({
      ...section,
      items: filtered.filter((item) => section.categories.includes(item.category))
    }))
    .filter((section) => section.items.length > 0);

  if (grouped.length === 0) {
    menuContainer.innerHTML = `
      <section class="menu-section empty-results">
        <div class="section-header"><h3>No drinks match your filters</h3></div>
        <p class="empty-copy">Try another search term or reset the filters for a wider selection.</p>
      </section>
    `;
    return;
  }

  menuContainer.innerHTML = grouped
    .map((section) => {
      const cards = section.items.map(renderBeverageCard).join('');
      const content = section.subsections
        ? section.subsections
            .map((subsection) => {
              const subsectionItems = section.items.filter((item) => item.category === subsection.category);
              if (subsectionItems.length === 0) return '';
              return `
                <section class="wine-subsection" id="${subsection.category}">
                  <div class="wine-subsection-heading"><h4>${subsection.title}</h4></div>
                  <div class="section-grid">${subsectionItems.map(renderBeverageCard).join('')}</div>
                </section>
              `;
            })
            .join('')
        : `<div class="section-grid">${cards}</div>`;

      return `
        <section class="menu-section ${section.id === 'wine' ? 'wine-menu' : ''}" id="${section.id}">
          <div class="section-header">
            <h3>${section.title}</h3>
            <span>${section.items.length} items</span>
          </div>
          ${content}
        </section>
      `;
    })
    .join('');

  attachCardHandlers();
}

function attachCardHandlers() {
  document.querySelectorAll('[data-id]').forEach((el) => {
    el.addEventListener('click', (event) => {
      const target = event.target.closest('[data-id]');
      if (!target) return;
      const id = target.dataset.id;
      const item = beverages.find((beverage) => beverage.id === id);
      if (item) openModal(item);
    });
  });
}

function openModal(item) {
  const modal = document.getElementById('beverageModal');
  const modalBody = document.getElementById('modalBody');

  const closeButton = document.querySelector('.close-modal');
  if (closeButton) {
    closeButton.onclick = closeModal;
  }

  const wineDetails = item.category.includes('wine')
    ? `
      <div class="detail-grid">
        <div class="detail-item"><strong>Origin</strong><span>${item.origin === 'Lebanon' ? 'Local · Lebanon' : `Imported · ${item.origin}`}</span></div>
        <div class="detail-item"><strong>Glass</strong><span>$${item.glassPrice}</span></div>
        <div class="detail-item"><strong>Bottle</strong><span>$${item.bottlePrice}</span></div>
        <div class="detail-item"><strong>Winery</strong><span>${item.winery || '—'}</span></div>
        <div class="detail-item"><strong>Region</strong><span>${item.region || '—'}</span></div>
        <div class="detail-item"><strong>Grape</strong><span>${item.grape || '—'}</span></div>
        <div class="detail-item"><strong>Body</strong><span>${item.body || '—'}</span></div>
        <div class="detail-item"><strong>Sweetness</strong><span>${item.sweetness || '—'}</span></div>
        <div class="detail-item"><strong>Acidity</strong><span>${item.acidity || '—'}</span></div>
        <div class="detail-item"><strong>Tannin</strong><span>${item.tannin || '—'}</span></div>
        <div class="detail-item"><strong>Flavor</strong><span>${item.flavorProfile || '—'}</span></div>
      </div>
    `
    : '';

  modalBody.innerHTML = `
    <div class="modal-header">
      <div>
        <p class="eyebrow" style="color: var(--brown); margin-bottom: 8px;">${item.categoryLabel}</p>
        <h2 id="modalTitle" class="modal-title">${item.name}</h2>
      </div>
      <div class="modal-price">${item.category.includes('wine') ? `$${item.glassPrice} / glass` : formatPrice(item.price)}</div>
    </div>
    <div class="modal-availability">
      <span>${item.temperature === 'hot' ? 'Served Hot' : 'Served Cold'}</span>
      <span>${item.alcohol === 'alcoholic' ? 'Alcoholic' : 'Non-Alcoholic'}</span>
      ${item.vegan ? '<span>Vegan</span>' : ''}
    </div>
    <p class="modal-description">${item.description}</p>
    <div class="detail-grid">
      <div class="detail-item"><strong>Glassware</strong><span>${item.glassware || '—'}</span></div>
      <div class="detail-item"><strong>Origin</strong><span>${item.origin || '—'}</span></div>
      <div class="detail-item"><strong>Temperature</strong><span>${item.temperature === 'hot' ? 'Hot' : 'Cold'}</span></div>
      <div class="detail-item"><strong>Calories</strong><span>${item.calories || '—'}</span></div>
      <div class="detail-item"><strong>Serving</strong><span>${item.servingSize || '—'}</span></div>
      <div class="detail-item"><strong>Allergens</strong><span>${(item.allergens || ['None']).join(', ')}</span></div>
    </div>
    ${wineDetails}
    <div class="detail-grid">
      <div class="detail-item"><strong>Ingredients</strong><span>${(item.ingredients || []).join(', ')}</span></div>
      <div class="detail-item"><strong>Preparation</strong><span>${item.preparation || '—'}</span></div>
      <div class="detail-item"><strong>Pairing</strong><span>${item.pairing || '—'}</span></div>
      <div class="detail-item"><strong>Customization</strong><span>${(item.customization || ['Standard']).join(', ')}</span></div>
    </div>
    <div class="modal-actions">
      <button type="button" class="secondary-action" data-close="true">Close</button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  const secondaryClose = document.querySelector('.secondary-action[data-close="true"]');
  if (secondaryClose) {
    secondaryClose.addEventListener('click', closeModal);
  }
}

function closeModal() {
  const modal = document.getElementById('beverageModal');
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function bindControls() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const tempFilter = document.getElementById('tempFilter');
  const alcoholFilter = document.getElementById('alcoholFilter');
  const veganFilter = document.getElementById('veganFilter');
  const sortFilter = document.getElementById('sortFilter');

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, '', targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  searchInput.addEventListener('input', (event) => {
    state.query = event.target.value;
    renderMenuSections();
  });

  categoryFilter.addEventListener('change', (event) => {
    state.category = event.target.value;
    renderMenuSections();
  });

  tempFilter.addEventListener('change', (event) => {
    state.temp = event.target.value;
    renderMenuSections();
  });

  alcoholFilter.addEventListener('change', (event) => {
    state.alcohol = event.target.value;
    renderMenuSections();
  });

  veganFilter.addEventListener('change', (event) => {
    state.vegan = event.target.value;
    renderMenuSections();
  });

  sortFilter.addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderMenuSections();
  });

  document.getElementById('beverageModal').addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function init() {
  renderCategoryOptions();
  renderSignatureCards();
  renderMenuSections();
  bindControls();
}

init();
