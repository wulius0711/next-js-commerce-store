import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    productName: 'sony-walkman',
    type: 'tape',
    description: '',
    price: 112,
  },
  {
    id: 2,
    productName: 'radio',
    type: 'Freqency',
    description: '',
    price: 212,
  },
  {
    id: 3,
    productName: 'loudspeaker',
    type: 'output',
    description: '',
    price: 221,
  },
  {
    id: 4,
    productName: 'tape-player',
    type: 'tape',
    description: '',
    price: 121,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          type,
          description,
          price
        )
      VALUES
        (
          ${product.productName},
          ${product.type},
          ${product.description},
          ${product.price}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
