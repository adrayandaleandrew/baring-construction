export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'General Construction', href: '/services/general-construction' },
      { label: 'Electrical Works', href: '/services/electrical-works' },
      { label: 'Civil & Structural', href: '/services/civil-structural' },
      { label: 'Architectural', href: '/services/architectural' },
      { label: 'MEPF Services', href: '/services/mepf-services' },
      { label: 'Specialized', href: '/services/specialized' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Request Quote', href: '/quote', cta: true },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'General Construction', href: '/services/general-construction' },
    { label: 'Electrical Works', href: '/services/electrical-works' },
    { label: 'Civil & Structural', href: '/services/civil-structural' },
    { label: 'Architectural', href: '/services/architectural' },
    { label: 'MEPF Services', href: '/services/mepf-services' },
    { label: 'Specialized', href: '/services/specialized' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};
