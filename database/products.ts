import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

// const products = [
//   {
//     id: 1,
//     productName: 'sony-walkman',
//     type: 'tape',
//     price: 112,
//   },
//   {
//     id: 2,
//     productName: 'radio',
//     type: 'Freqency',
//     price: 212,
//   },
//   {
//     id: 3,
//     productName: 'loudspeaker',
//     type: 'output',
//     price: 221,
//   },
//   {
//     id: 4,
//     productName: 'tape-player',
//     type: 'tape',
//     price: 121,
//   },
// ];

// const sql = postgres();

// console.log(
//   sql`
//     SELECT
//       *
//     FROM
//       products
//   `.then((data) => console.log('Products: ', data)),
// );

type Product = {
  id: number;
  name: string;
  type: string;
  description: string | null;
  price: number;
};

export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  // Postgres always returns an array
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return product;
});
