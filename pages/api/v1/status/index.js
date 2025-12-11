import database from 'infra/database.js';

async function index(req, res) {
  const result = await database.query('SELECT NOW()');
  console.log(result.rows);
  res.status(200).json({status: result.rows});
}

export default index;