export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  estimatedDuration: string;
  recommendedInterval: string;
  image: string;
  keyBenefits: string[];
  equipmentUsed: string;
  featured?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fitting',
    slug: 'tyre-fitting-replacement',
    title: 'Precision Tyre Fitting & Replacement',
    category: 'Installation & Fitment',
    shortDescription: 'Touchless leverless mounting technology that protects diamond-cut alloys while seating tyres to exact bead tolerances.',
    fullDescription: 'Our premium tyre fitting service eliminates metal-on-metal wheel contact entirely using robotic leverless mount demount heads. Each tyre is seated using specialized European mounting lubricants, new high-pressure rubber valves, and exact bead-seat inflation protocols before precision balancing.',
    estimatedDuration: '30 – 45 Minutes (set of 4)',
    recommendedInterval: 'At tread depth < 3mm or 5+ years',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Touchless mounting eliminates all alloy rim scratches',
      'High-pressure snap-in valve replacement included',
      'Electronic bead seating to factory OEM specifications',
      'Environmentally certified scrap tyre disposal & recycling'
    ],
    equipmentUsed: 'Corghi Touchless Artiglio Master robotic mounting arm',
    featured: true,
  },
  {
    id: 'alignment',
    slug: '3d-laser-wheel-alignment',
    title: '3D Laser Wheel Alignment',
    category: 'Chassis Geometry',
    shortDescription: 'Millimetre-accurate 4-wheel computerized alignment correcting Camber, Caster, and Toe angles to eliminate tyre scrub and steering pull.',
    fullDescription: 'Using high-definition optical camera sensors and non-contact wheel clamps, our 3D laser alignment system measures the spatial relationship of all four wheels against the vehicle thrust line. We restore factory steering geometry, eliminate inner shoulder wear, and ensure the steering wheel sits dead-centre.',
    estimatedDuration: '40 – 60 Minutes',
    recommendedInterval: 'Every 10,000 km or after hitting a curb/pothole',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Four-wheel optical telemetry with ±0.01° angular precision',
      'Full before-and-after digital geometry colour report',
      'Correction of irregular inner and outer shoulder tread wear',
      'Optimal directional stability and reduced highway rolling resistance'
    ],
    equipmentUsed: 'Hunter Hawkeye Elite 3D Optical Imaging System',
    featured: true,
  },
  {
    id: 'balancing',
    slug: 'dynamic-wheel-balancing',
    title: 'Dynamic Road-Force Wheel Balancing',
    category: 'Vibration Diagnostics',
    shortDescription: 'Diagnostic load-roller balancing simulating actual highway tarmac pressure to eliminate steering-wheel shudder and uneven tyre cupping.',
    fullDescription: 'Standard spin balancing only detects static centrifugal weight imbalances. Our dynamic road-force system presses a 600 kg simulated road roller against the rotating tyre assembly to identify radial runout, rim runout, and tyre stiffness variations, placing laser-guided adhesive weights with surgical precision.',
    estimatedDuration: '25 – 35 Minutes',
    recommendedInterval: 'Every tyre change or when vibration is felt at 80+ km/h',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Direct road-force roller simulation eradicating elusive vibrations',
      'Laser-guided split-weight placement hidden behind wheel spokes',
      'Match-mounting rim-to-tyre runout compensation',
      'Protects suspension dampers, wheel bearings, and steering rack'
    ],
    equipmentUsed: 'Hunter Road Force Touch HD diagnostic balancer',
    featured: true,
  },
  {
    id: 'puncture',
    slug: 'puncture-repair',
    title: 'BS AU 159 Safety Puncture Repair',
    category: 'Repair & Safety',
    shortDescription: 'Demounted internal inspection with vulcanized one-piece mushroom combination plugs ensuring permanent hermetic seal integrity.',
    fullDescription: 'We strictly refuse temporary external string plugs that risk sudden casing blowouts. Every repair begins by demounting the tyre to inspect the inner liner for cord degradation. If within the central 60-70% minor repair zone, we ream the puncture channel, vulcanize a one-piece stem plug, and seal the internal butyl liner.',
    estimatedDuration: '25 – 30 Minutes',
    recommendedInterval: 'Immediate upon sudden pressure drop or nail puncture',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Comprehensive dismounted internal belt and casing inspection',
      'Chemical cold vulcanization creating permanent physical bond',
      'Preserves the tyre speed and load index rating under BS AU 159',
      'Complete dynamic re-balance included with every puncture repair'
    ],
    equipmentUsed: 'Tech Permacure Vulcanization System & Ultrasonic Leak Detection',
    featured: true,
  },
  {
    id: 'rotation',
    slug: 'tyre-rotation-wear-optimization',
    title: 'Tyre Rotation & Wear Optimization',
    category: 'Preventative Maintenance',
    shortDescription: 'Systematic axle pattern rotation equalizing steering and braking loads to extend tyre lifespan by up to 30%.',
    fullDescription: 'Because front tyres endure intense cornering friction and 70% of vehicle braking force, they wear up to 2.5 times faster than rear tyres. Our technicians inspect directional and asymmetric tread designs to execute cross, forward, or modified rotation sequences while recalibrating individual tyre pressure sensors.',
    estimatedDuration: '20 Minutes',
    recommendedInterval: 'Every 8,000 – 10,000 km',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Maximizes uniform tread life across all four tyres',
      'Prevents heel-and-toe wear noise and road humming',
      'Protects AWD differentials from rolling circumference discrepancies',
      'Includes torque wrench tightening to exact OEM bolt foot-pounds'
    ],
    equipmentUsed: 'Snap-On Digital Torque Calibration Wrench & Hydraulic Axle Lift',
  },
  {
    id: 'inspection',
    slug: 'digital-tread-pressure-inspection',
    title: '32-Point Digital Tread & Pressure Audit',
    category: 'Safety Diagnostics',
    shortDescription: 'Laser tread depth profiling, sidewall structural integrity scan, and temperature-adjusted digital inflation audit.',
    fullDescription: 'Driving with less than 3mm of tread quadruples wet braking distances. Our 32-point tyre health inspection uses digital depth gauges across three groove channels per tyre, inspects for micro-cracks, shoulder scrub, bulges, and recalibrates TPMS sensor thresholds with nitrogen inflation options.',
    estimatedDuration: '15 Minutes',
    recommendedInterval: 'Monthly or prior to long highway journeys',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Laser depth scan measuring inner, centre, and outer groove depth',
      'High-precision digital gauge calibration to ±0.05 PSI',
      'Complete printed & digital PDF health audit with wear forecast',
      'Sidewall impact bulge, bead seating, and UV degradation scan'
    ],
    equipmentUsed: 'Autel MaxiTPMS Diagnostic Scanner & Digital Laser Tread Profiler',
  },
  {
    id: 'seasonal',
    slug: 'seasonal-tyre-swap',
    title: 'Seasonal Tyre Swap & Climate Advisory',
    category: 'Seasonal Care',
    shortDescription: 'Summer-to-winter compound transitions optimized for cold-weather silica performance and maximum wet cold braking.',
    fullDescription: 'Summer compounds harden like glass below 7°C, drastically losing traction even on dry asphalt. Our seasonal changeover safely swaps your summer and winter wheel/tyre sets, inspects bead seals, cleans mounting flanges to eliminate brake judder, and provides climate storage guidance.',
    estimatedDuration: '30 – 40 Minutes',
    recommendedInterval: 'Twice annually (Spring & Autumn)',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Rapid seasonal changeover with full rim flange decontamination',
      'Silica compound flexibility inspection for sub-zero safety',
      'Protective rim bagging and optional climate tyre hotel advisory',
      'TPMS profile re-coding for alternate sensor IDs'
    ],
    equipmentUsed: 'Specialized Wheel Flange Surface Grinder & Hub Centric Alignment',
  },
  {
    id: 'tpms-rim',
    slug: 'rim-sealing-tpms-calibration',
    title: 'Alloy Rim Bead Sealing & TPMS Calibration',
    category: 'Specialist Wheel Care',
    shortDescription: 'Corrosion removal on alloy bead seats, bead sealing compound application, and direct TPMS battery sensor programming.',
    fullDescription: 'Alloy wheels frequently develop bead leaks from road salt oxidation and micro-corrosion along the inner barrel, causing persistent slow pressure loss. We strip rim corrosion, treat the bead seat with industrial elastomer sealant, replace rubber TPMS seals, and reprogram sensor frequencies to the ECU.',
    estimatedDuration: '35 Minutes',
    recommendedInterval: 'When experiencing chronic slow air loss (1–2 PSI weekly)',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85',
    keyBenefits: [
      'Eliminates chronic slow leaks without requiring new alloy wheels',
      'Industrial bead sealant prevents future chemical bead oxidation',
      'TPMS valve stem collar, grommet, and valve core refurbishment',
      'Electronic sensor ID pairing and dashboard reset'
    ],
    equipmentUsed: 'Rotary Wire Bead Decontamination System & TPMS Frequency Scanner',
  },
];
