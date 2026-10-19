export interface TestimonialItem {
  id: string;
  author: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
  isDemoSample: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Julian Vance',
    vehicle: 'BMW M340i xDrive Touring',
    service: '3D Laser Alignment & Michelin Pilot Sport 4S Fitment',
    rating: 5,
    date: 'March 2026',
    quote: 'The level of precision here is unlike any regular tyre shop. They took the time to show me the Hunter alignment telemetry screen, explained why my inner front shoulders were feathering, and returned the car with dead-centre steering and zero rim marks.',
    isDemoSample: true,
  },
  {
    id: 'test-2',
    author: 'Sophia Chen',
    vehicle: 'Porsche Macan GTS (21” RS Spyder Wheels)',
    service: 'Road-Force Balancing & Touchless Tyre Replacement',
    rating: 5,
    date: 'February 2026',
    quote: 'I was terrified of having my satin black 21-inch rims damaged during tyre mounting. TreadCraft’s robotic touchless changer didn’t touch the outer rim face once. The high-speed 70 mph steering shimmy is completely gone.',
    isDemoSample: true,
  },
  {
    id: 'test-3',
    author: 'Marcus Sterling',
    vehicle: 'Tesla Model 3 Performance',
    service: 'EV Acoustic Tyre Fitting & Digital Tread Scan',
    rating: 5,
    date: 'January 2026',
    quote: 'Instant torque cars eat tyres quickly. TreadCraft recommended the ideal acoustic foam compound with reinforced load ratings. The cabin road roar dropped noticeably on the motorway. Exceptional customer lounge as well.',
    isDemoSample: true,
  },
  {
    id: 'test-4',
    author: 'Elena Rostova',
    vehicle: 'Audi A6 Avant 55 TFSI e',
    service: 'Four-Wheel Computerized Geometry & Puncture Repair',
    rating: 5,
    date: 'November 2025',
    quote: 'Had a persistent slow leak that two other garages failed to diagnose. TreadCraft dismounted the tyre, discovered bead rim micro-corrosion, sealed it properly, and realigned the chassis. Honest, transparent, and prompt.',
    isDemoSample: true,
  },
];
