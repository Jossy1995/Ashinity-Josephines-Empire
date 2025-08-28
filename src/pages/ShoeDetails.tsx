import { useParams } from 'react-router-dom';
import shoes from '../data/shoes';
import type { ShoeItem } from '../types/shoe';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function ShoeDetails() {
  const { id } = useParams<Params>();
  const item = shoes.find((item: ShoeItem) => item.id === Number(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>ID: {item.id}</h2>
      <p> NAME: {item.name}</p>
      <p> DESCRIPTION: {item.description}</p>
      <p>Price: ₦{item.price}</p>
    </div>
  );
}
