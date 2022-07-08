import { Pool } from 'pg';

const connectionString='postgres://mpzzbctk:CkbZ_0zgLLrM16Zat4msTZLTPOH99dCg@kesavan.db.elephantsql.com/mpzzbctk';
const db = new Pool({ connectionString });

export default db;