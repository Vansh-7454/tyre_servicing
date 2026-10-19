export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'alignment' | 'tyres';
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'alignment',
    question: 'What is the main difference between wheel alignment and wheel balancing?',
    answer: 'Wheel alignment adjusts the directional angles of the wheels (Camber, Caster, and Toe) so they are completely parallel to each other and perpendicular to the road. Wheel balancing, on the other hand, corrects weight imbalances around the circumference of the wheel and tyre assembly by attaching precision counterweights. Alignment prevents uneven tyre wear and vehicle pull; balancing eliminates high-speed steering wheel vibrations.',
  },
  {
    category: 'alignment',
    question: 'How often should I have my wheel alignment checked?',
    answer: 'We recommend an alignment check every 10,000 to 12,000 km, or immediately after severe impacts with potholes or curbs, fitting new tyres, or replacing suspension components. Regular alignment checks extend tyre life by up to 15,000 kilometres.',
  },
  {
    category: 'tyres',
    question: 'What is the legal minimum tread depth, and what does TreadCraft recommend?',
    answer: 'While the legal minimum tread depth across the UK and Europe is 1.6mm across the central three-quarters of the tyre, wet braking distance dramatically worsens once tread wears below 3mm. Below 3mm, the tyre loses over 50% of its water displacement capability, significantly elevating hydroplaning risks. We strongly recommend replacement at 3mm for optimal safety.',
  },
  {
    category: 'general',
    question: 'Do you use touchless equipment that protects custom and diamond-cut alloy wheels?',
    answer: 'Yes, 100%. Our workshop is equipped exclusively with Corghi Touchless Artiglio Master robotic demount arms. The bead breaker and mounting tools never make metal-on-metal contact with your wheel face or outer rim edge, completely eliminating cosmetic scratching or lacquer peeling on expensive forged or diamond-cut wheels.',
  },
  {
    category: 'tyres',
    question: 'Can you service and repair Run-Flat (RFT) tyres?',
    answer: 'Yes. Our heavy-duty robotic mounting arms are rated for high-stiffness reinforced run-flat sidewalls. However, regarding puncture repair: if a run-flat tyre has been driven with zero pressure for more than a few miles, internal sidewall heat degradation usually necessitates replacement according to manufacturer safety protocols.',
  },
  {
    category: 'general',
    question: 'How long does a full 4-wheel alignment and tyre fitting appointment take?',
    answer: 'A standard set of four tyres mounted and dynamic road-force balanced takes approximately 35 to 45 minutes. If combined with a complete 3D 4-wheel laser alignment and steering angle sensor calibration, the total appointment time is roughly 60 to 75 minutes. You can relax in our executive lounge with artisan coffee and high-speed Wi-Fi during the service.',
  },
];
