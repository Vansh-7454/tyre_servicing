export interface TyreProduct {
  id: string;
  name: string;
  category: 'performance' | 'touring' | 'suv' | 'ev' | 'all-season';
  categoryLabel: string;
  sizeExample: string;
  speedIndex: string;
  loadIndex: string;
  fuelEfficiency: 'A' | 'B' | 'C' | 'D';
  wetGrip: 'A' | 'B' | 'C';
  noiseLevelDb: number;
  featuredFeature: string;
  bestFor: string;
  illustrativePriceGuide: string;
  image: string;
  description: string;
  tags: string[];
}

export const TYRE_CATEGORIES = [
  { id: 'all', label: 'All Tyres' },
  { id: 'touring', label: 'Passenger & Touring' },
  { id: 'performance', label: 'Ultra High Performance' },
  { id: 'suv', label: 'SUV & All-Terrain' },
  { id: 'ev', label: 'EV & Hybrid Acoustic' },
  { id: 'all-season', label: 'All-Season Compound' },
];

export const TYRES_DATA: TyreProduct[] = [
  {
    id: 'tyre-1',
    name: 'TreadCraft ApexTouring Pro',
    category: 'touring',
    categoryLabel: 'Passenger & Touring',
    sizeExample: '205/55 R16 91V',
    speedIndex: 'V (Up to 240 km/h)',
    loadIndex: '91 (615 kg)',
    fuelEfficiency: 'A',
    wetGrip: 'A',
    noiseLevelDb: 68,
    featuredFeature: 'Silica-infused polymer compound offering 60,000+ km longevity',
    bestFor: 'Daily saloon cars, family hatchbacks, and executive highway commuting.',
    illustrativePriceGuide: 'From £95 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85',
    description: 'Engineered for smooth long-distance cruising, minimal cabin road roar, and superior hydroplaning resistance in heavy torrential rain.',
    tags: ['A-Rated Wet Grip', 'Extended Mileage', 'Quiet Ride'],
  },
  {
    id: 'tyre-2',
    name: 'TreadCraft Velocita Sport GT',
    category: 'performance',
    categoryLabel: 'Ultra High Performance',
    sizeExample: '245/40 R19 98Y XL',
    speedIndex: 'Y (Up to 300 km/h)',
    loadIndex: '98 (750 kg)',
    fuelEfficiency: 'C',
    wetGrip: 'A',
    noiseLevelDb: 71,
    featuredFeature: 'Asymmetric outer shoulder blocks for maximum lateral cornering G-force',
    bestFor: 'Sports sedans, performance coupés, and track-inspired street driving.',
    illustrativePriceGuide: 'From £165 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    description: 'Direct steering response and telepathic steering feedback. Features reinforced aramid cord belts that resist high-speed tyre carcass distortion.',
    tags: ['Track Tested', 'Aramid Belt', 'Instant Response'],
  },
  {
    id: 'tyre-3',
    name: 'TreadCraft TerraGrip SUV 4x4',
    category: 'suv',
    categoryLabel: 'SUV & All-Terrain',
    sizeExample: '255/55 R18 109V XL',
    speedIndex: 'V (Up to 240 km/h)',
    loadIndex: '109 (1,030 kg)',
    fuelEfficiency: 'B',
    wetGrip: 'A',
    noiseLevelDb: 70,
    featuredFeature: 'Reinforced 3-ply sidewall shielding against curb strikes and gravel chips',
    bestFor: 'Modern crossovers, luxury SUVs, and occasional light gravel trail excursions.',
    illustrativePriceGuide: 'From £145 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    description: 'Combines highway quietness with heavy vehicle load ratings and interlocking shoulder sipes that bite into wet grass, mud, and uneven road shoulders.',
    tags: ['Reinforced Sidewall', 'High Load Index', 'All-Surface Grip'],
  },
  {
    id: 'tyre-4',
    name: 'TreadCraft ElectraGlide Silent EV',
    category: 'ev',
    categoryLabel: 'EV & Hybrid Acoustic',
    sizeExample: '235/45 R18 98W XL',
    speedIndex: 'W (Up to 270 km/h)',
    loadIndex: '98 (750 kg)',
    fuelEfficiency: 'A',
    wetGrip: 'A',
    noiseLevelDb: 66,
    featuredFeature: 'Polyurethane internal acoustic resonance absorption foam insert',
    bestFor: 'Electric and plug-in hybrid vehicles requiring instantaneous torque traction and ultra-low decibel roar.',
    illustrativePriceGuide: 'From £155 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed specifically for battery electric vehicles. Features high-load structural belts for heavy kerb weights and ultra-low rolling resistance compound for range maximization.',
    tags: ['Acoustic Foam', 'Instant Torque Ready', 'Range Maximizer'],
  },
  {
    id: 'tyre-5',
    name: 'TreadCraft CrossClima All-Weather',
    category: 'all-season',
    categoryLabel: 'All-Season Compound',
    sizeExample: '225/45 R17 94V XL',
    speedIndex: 'V (Up to 240 km/h)',
    loadIndex: '94 (670 kg)',
    fuelEfficiency: 'B',
    wetGrip: 'A',
    noiseLevelDb: 69,
    featuredFeature: 'V-shaped directional tread evacuating slush with 3PMSF severe snow certification',
    bestFor: 'Year-round UK and temperate European driving without requiring semi-annual wheel swaps.',
    illustrativePriceGuide: 'From £120 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=85',
    description: 'Engineered with a thermo-adaptive smart rubber compound that remains pliable in freezing winter temperatures yet firm and stable during warm summer tarmac runs.',
    tags: ['3PMSF Certified', 'Directional V-Tread', 'All-Year Safety'],
  },
  {
    id: 'tyre-6',
    name: 'TreadCraft Scuderia TrackForce',
    category: 'performance',
    categoryLabel: 'Ultra High Performance',
    sizeExample: '275/35 R20 102Y XL',
    speedIndex: 'Y (Up to 300 km/h)',
    loadIndex: '102 (850 kg)',
    fuelEfficiency: 'D',
    wetGrip: 'B',
    noiseLevelDb: 73,
    featuredFeature: 'Semi-slick outer rib with micro-groove racing compound',
    bestFor: 'Supercars, track days, and spirited performance enthusiasts.',
    illustrativePriceGuide: 'From £220 / tyre (Sample Guide)',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85',
    description: 'Ultimate mechanical dry grip designed for extreme braking forces and blistering lap times. Minimal tread void ratio for maximum road contact patch.',
    tags: ['Semi-Slick Shoulder', 'Maximum Dry Grip', 'Track Approved'],
  },
];

export const TYRE_SPEC_GUIDE = [
  {
    part: '225',
    name: 'Width (mm)',
    description: 'The nominal cross-section width of the tyre from sidewall to sidewall in millimetres.',
  },
  {
    part: '45',
    name: 'Aspect Ratio (%)',
    description: 'The height of the tyre sidewall expressed as a percentage of the tyre width (45% of 225mm = 101.25mm).',
  },
  {
    part: 'R',
    name: 'Construction',
    description: 'Radial ply internal casing cords running at 90 degrees to the direction of travel.',
  },
  {
    part: '18',
    name: 'Rim Diameter (inches)',
    description: 'The internal diameter of the tyre designed to fit the alloy wheel wheel rim.',
  },
  {
    part: '95',
    name: 'Load Index',
    description: 'Numerical code associated with the maximum load a tyre can carry at speed (95 = 690 kg per wheel).',
  },
  {
    part: 'Y',
    name: 'Speed Symbol',
    description: 'Alphabetical rating designating the maximum speed the tyre can safely sustain (Y = up to 300 km/h / 186 mph).',
  },
];
