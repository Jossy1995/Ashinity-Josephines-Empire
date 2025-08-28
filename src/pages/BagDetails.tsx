import { useParams } from 'react-router-dom';
import bags from '../data/bags';
import type { BagItem } from '../types/bag';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function BagDetails() {
  const { id } = useParams<Params>();
  const item = bags.find((item: BagItem) => item.id === Number(id));

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
