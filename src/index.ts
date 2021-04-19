import * as http from 'http';
import { Pool } from 'pg';
import express from 'express';

const app = express();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT as any,
});

app.get('/', async (req, res) => {
  const data = await pool.query('SELECT NOW()');
  console.log(data.rows[0]);
  res.send('Chamada a cobrar, para aceita-la diga seu nome e a cidade de onde está falando');
});

app.listen(9090, () => {
  console.log('Server started on port 9090, Happy Hacking!');
});
