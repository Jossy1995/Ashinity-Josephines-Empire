// src/pages/ClothPage.tsx
import { Link } from 'react-router-dom';
import shoes from '../data/shoes';

export default function ShoePage() {
  return (
    <div>
      <h1>Corporate and Casual Shoe Collections</h1>
      <ul>
        {shoes.map(shoe => (
          <li key={shoe.id}>
            <Link to={`/shoes/${shoe.id}`}>{shoe.name}</Link>
            {shoe.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
