export interface WorkshopLocation {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  directionsUrl: string;
  baysCount: number;
  equipment: string[];
  amenities: string[];
  image: string;
  openingHours: { days: string; hours: string }[];
  isDemoNotice: string;
}

export const WORKSHOP_DETAILS: WorkshopLocation = {
  id: 'hub-london-nw',
  name: 'TreadCraft Apex Workshop & Diagnostic Centre',
  badge: 'Primary Flagship Hub',
  tagline: 'Engineered for precision tyre fitting, 3D laser alignment, and dynamic road-force diagnostics.',
  address: 'Unit 4, Apex Autocare Park, Precision Way',
  postalCode: 'NW10 7HQ',
  city: 'London, UK',
  phone: '+44 (0) 20 8945 7200',
  whatsapp: '+447911123456',
  email: 'service@treadcraftautocare.com',
  directionsUrl: 'https://maps.google.com/?q=Precision+Way+London',
  baysCount: 6,
  equipment: [
    '2x Hunter Hawkeye Elite 3D Optical Imaging Alignment Racks',
    '3x Corghi Artiglio Master Touchless Robotic Tyre Changers',
    '2x Hunter Road Force Touch Diagnostic Balancers with 600kg Load Roller',
    'Autel MaxiTPMS TS608 Professional Diagnostic & Programming Stations',
    'Dedicated Ultrasonic Rim Leak & Submersion Testing Tank',
    'Snap-On Calibrated Digital Micro-Torque Wrenches'
  ],
  amenities: [
    'Executive lounge with panoramic glass viewing gallery into service bays',
    'Complimentary single-origin espresso and artisan refreshments',
    'High-speed Fibre Wi-Fi and ergonomic laptop work desks',
    'Transparent digital inspection reports sent straight to your phone',
    'Complimentary multi-point tyre health check with every appointment'
  ],
  image: 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85',
  openingHours: [
    { days: 'Monday – Friday', hours: '08:00 – 18:30' },
    { days: 'Saturday', hours: '08:30 – 16:30' },
    { days: 'Sunday', hours: 'Closed (Emergency Callouts By Request)' },
  ],
  isDemoNotice: 'Note: This location profile is an illustrative demonstration for TreadCraft Auto Care static showcase.',
};
