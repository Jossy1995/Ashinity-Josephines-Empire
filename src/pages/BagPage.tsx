// src/pages/ClothPage.tsx
import { Link } from 'react-router-dom';
import bags from '../data/bags';

export default function BagPage() {
  return (
    <div>
      <h1>You Can't go wrong on fashion using one of our classic bags</h1>
      <ul>
        {bags.map(bag => (
          <li key={bag.id}>
            <Link to={`/bags/${bag.id}`}>{bag.name}</Link>
            {bag.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
