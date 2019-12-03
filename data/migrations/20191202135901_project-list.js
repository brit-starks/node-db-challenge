
exports.up = function(knex) {

  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.text('project_name', 128)
      .unique()
      .notNullable();
    tbl.text('description')
    tbl.boolean(false)
      .notNullable()
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.text('resource_name')
      .notNullable();
    tbl.text('description');
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('task');
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.text('description')
      .notNullable();
    tbl.text('notes');
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project');
    tbl.boolean(false)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
