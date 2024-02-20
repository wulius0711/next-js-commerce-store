// import exp from 'node:constants';
// import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';
import postgres from 'postgres';
import { setEnvironmentVariables } from './util/config';

// dotenv.config();

// export function setEnvironmentVariables() {
//   // Replacement for unmaintained dotenv-safe package
//   // https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
//   //
//   // FIXME: Remove this and switch to dotenv/safe if this proposal gets implemented:
//   // https://github.com/motdotla/dotenv/issues/709
//   dotenv.config();
//   const unconfiguredEnvVars = Object.keys(
//     dotenv.parse(readFileSync('./.env.example')),
//   ).filter((exampleKey) => !process.env[exampleKey]);

//   if (unconfiguredEnvVars.length > 0) {
//     throw new Error(
//       `.env.example environment ${
//         unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
//       } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
//     );
//   }
//   // End replacement for dotenv-safe
// }

setEnvironmentVariables();

const sql = postgres();
// ('postgres://soundwulf:soundwulf@localhost:5432/soundwulf')

console.log(
  await sql`
    SELECT
      *
    FROM
      products
  `,
);
