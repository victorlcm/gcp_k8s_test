import * as http from 'http';
import { Pool } from 'pg';

const pool = new Pool();

http
  .createServer(async function (req, res) {
    const data = await pool.query('SELECT NOW()');
    res.write(data.rows);
    res.end();
  })
  .listen(9090);

console.log('Server started on port 9090, Happy Hacking!');
