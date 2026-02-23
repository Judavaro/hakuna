import Image from 'next/image';
import type { Destination } from '../data/destinations';

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <div className="relative h-48">
        <Image
          src={destination.image}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
        <p className="text-gray-700 mb-4">{destination.description}</p>
        <a
          href="#contacto"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Más información
        </a>
      </div>
    </div>
  );
}