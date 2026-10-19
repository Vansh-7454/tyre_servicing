export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tyres', href: '/tyres' },
  { label: 'Alignment & Balancing', href: '/wheel-alignment-balancing' },
  { label: 'About Us', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
];

export const BRAND_INFO = {
  name: 'TREADCRAFT AUTO CARE',
  tagline: 'Precision on Every Mile.',
  subtagline: 'Modern tyre engineering, digital alignment, and high-performance wheel care.',
  phoneDisplay: '+44 (0) 20 8945 7200',
  phoneTel: '+442089457200',
  whatsappNumber: '+447911123456',
  email: 'service@treadcraftautocare.com',
  address: 'Unit 4, Apex Autocare Park, Precision Way, London NW10 7HQ',
  operatingHours: [
    { days: 'Monday – Friday', hours: '08:00 – 18:30' },
    { days: 'Saturday', hours: '08:30 – 16:30' },
    { days: 'Sunday', hours: 'Closed (Emergency Callouts Only)' },
  ],
  socials: [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
  stats: [
    { label: 'Precision Laser Accuracy', value: '±0.01°' },
    { label: 'Touchless Rim Protection', value: '100%' },
    { label: 'Turnaround Guarantee', value: '45 Min' },
    { label: 'Digital Tread Checkpoints', value: '32-Point' },
  ],
};
