
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'get batmobile to Lucious', notes: 'remind lucious about utility belt', project_id: 1},
        {description: 'Help Alfred clean bat cave', project_id: 2},
        {description: 'find Riddler\'s hideout', project_id: 3}
      ]);
};
