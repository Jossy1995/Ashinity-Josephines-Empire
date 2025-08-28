import { useParams } from 'react-router-dom';
import clothes from '../data/clothes';
import type { ClothItem } from '../types/cloth';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function ClotheDetails() {
  const { id } = useParams<Params>();
  const item = clothes.find((item: ClothItem) => item.id === Number(id));

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
