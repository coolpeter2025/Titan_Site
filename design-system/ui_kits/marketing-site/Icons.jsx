/* global React */
// Lucide-style service + UI icons. 24x24, currentColor stroke.
const Icon = ({ d, children, fill = "none", size = 24, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
       viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const KitchenIcon = (p) => <Icon {...p}><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></Icon>;
const BathIcon = (p) => <Icon {...p}><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v6"/><path d="M4 12V6a2 2 0 0 1 2-2"/><path d="M20 12v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5"/></Icon>;
const HomeIcon = (p) => <Icon {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>;
const AdditionsIcon = (p) => <Icon {...p}><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></Icon>;
const NewConstructionIcon = (p) => <Icon {...p}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></Icon>;
const HammerIcon = (p) => <Icon {...p}><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></Icon>;
const StormIcon = (p) => <Icon {...p}><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9 20 3-3"/><path d="m17 20 3-3"/><path d="m13 20 3-3"/></Icon>;

const MenuIcon = (p) => <Icon {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>;
const XIcon = (p) => <Icon {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>;
const PhoneIcon = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const MapPinIcon = (p) => <Icon {...p}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></Icon>;
const StarIcon = (p) => <Icon fill="currentColor" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const CheckIcon = (p) => <Icon {...p}><path d="M20 6 9 17l-5-5"/></Icon>;

const ServiceIcon = ({ slug, ...rest }) => {
  const map = {
    "kitchen-remodeling": KitchenIcon,
    "bathroom-remodeling": BathIcon,
    "full-home-renovations": HomeIcon,
    "home-additions": AdditionsIcon,
    "new-construction": NewConstructionIcon,
    "general-construction": HammerIcon,
    "storm-damage-repair": StormIcon,
  };
  const C = map[slug] || HomeIcon;
  return <C {...rest} />;
};

Object.assign(window, {
  KitchenIcon, BathIcon, HomeIcon, AdditionsIcon, NewConstructionIcon, HammerIcon, StormIcon,
  MenuIcon, XIcon, PhoneIcon, MapPinIcon, StarIcon, CheckIcon, ServiceIcon,
});
