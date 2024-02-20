import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  description: string | null;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      name varchar(40) NOT NULL,
      type varchar(40) NOT NULL,
      description varchar(120),
      price integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
