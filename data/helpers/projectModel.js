const db = require('../db-config');

module.exports = {
  find,
  findById,
  add
}

function find() {
return db('projects');
}


function findById( id ) {
  return db('projects')
  .where({ id })
  .first();
}

async function add(project) {
  const [id] = await db('projects')
  .insert(project);

  return findById(id);
}