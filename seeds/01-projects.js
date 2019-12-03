exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, name: 'Batmobile', description: 'Repair batmobile'},
        {id: 2, name: 'Bat Cave', description: 'Dust, sweep, and clear out bats'},
        {id: 3, name: 'Rescue Catwoman', description: 'Solve Riddler\'s puzzle to save Catwoman'}
      ]);
};
