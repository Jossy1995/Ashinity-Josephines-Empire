import type { BagItem } from '../types/bag';
import Bag1 from '../assets/Products/bag1.jpg';
import Bag2 from '../assets/Products/bag2.jpg';
import Bag3 from '../assets/Products/bag3.jpg';
import Bag4 from '../assets/Products/bag4.jpg';
import Bag5 from '../assets/Products/bag5.jpg';
import Bag6 from '../assets/Products/bag6.jpg';
import Bag7 from '../assets/Products/bag7.jpg';
import Bag8 from '../assets/Products/bag8.jpg';
import Bag9 from '../assets/Products/bag9.jpg';
import Bag10 from '../assets/Products/bag10.jpg';



 const bagsData: BagItem[] = [
  {id: 1,slug: 'Goyard Exotic', name: 'Goyard Exotic Bag', image: Bag1, description: 'A stylish sweat top made with love and a very royal color.',
    price : 15000,},
  {id: 2, slug: 'elegant',name: 'Elegant Bag',image: Bag2,
description: 'Elegant Dress for classic women.',
    price: 5000,
  },
  {
    id: 3,
    slug: 'classy',
    name: 'Classy Bag',
    image: Bag3,
    description: 'This classy Jumpsuit is only for classy women.',
    price: 7000,
  },
  {
    id: 4,
    slug: 'hoodie',
    name: 'Luxurios Hoodie Bag',
    image: Bag4,
    description: 'Keep warm while maintaining your carriage',
    price: 20000
  },
  { id: 5,slug: 'luxury',
    name: 'Luxurious Bag', image: Bag5,
    description: 'Elegant Dress for classic women.',
    price: 8000,
  },
  {
    id: 6,
    slug: 'collections',
    name: 'Beautiful Collection bag',
   image:  Bag6 ,
    description: 'Solve all your fashion challenge in our one stop store.',
    price: 300,
  },
   {
    id: 7,
    slug: 'collections',
    name: 'Beautiful Collection bag',
   image: Bag7,
    description: 'Solve all your fashion challenge in our one stop store.',
    price: 300,
  },
   {
    id: 8,
    slug: 'collections',
    name: 'Beautiful Collection bag',
   image:  Bag8,
    description: 'Solve all your fashion challenge in our one stop store.',
    price: 300,
  },
   {
    id: 9,
    slug: 'collections',
    name: 'Beautiful Collection bag',
   image:  Bag9,
    description: 'Solve all your fashion challenge in our one stop store.',
    price: 300,
  },
   {
    id: 10,
    slug: 'collections',
    name: 'Beautiful Collection bag',
   image:  Bag10,
    description: 'Solve all your fashion challenge in our one stop store.',
    price: 300,
  },

];
export default bagsData;