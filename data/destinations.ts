export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Cartagena de Indias',
    description:
      'Descubre las playas, la historia y la cultura vibrante de Cartagena.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 2,
    name: 'San Andrés',
    description:
      'Sumérgete en el mar de siete colores y disfruta del paraíso caribeño.',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 3,
    name: 'Eje Cafetero',
    description:
      'Explora la región cafetera de Colombia y vive experiencias únicas.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=60'
  }
];