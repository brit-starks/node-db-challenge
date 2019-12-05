exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'Batmobile', description: 'Repair Batmobile'},
        {project_name: 'Bat Cave', description: 'Dust, sweep, and clear out bats'},
        {project_name: 'Rescue Catwoman', description: 'Solve Riddler\'s puzzle to save Catwoman'}
      ]);
};
