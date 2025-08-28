// src/pages/ClothPage.tsx
import { Link } from 'react-router-dom';
import clothes from '../data/clothes';


export default function ClothPage() {
  return (
    <div>
      <h1>Elegant Male and Female Cloth Collections</h1>
      <ul>
        {clothes.map(cloth => (
          <li key={cloth.id}>
            <Link to={`/clothes/${cloth.id}`}>{cloth.name}</Link>
            {cloth.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
