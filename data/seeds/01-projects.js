
exports.seed = function(knex) {

      return knex('projects').insert([
        {project_name: 'Database', description: 'Build database for students'},
        {project_name: 'Bat Mobile', description: 'Hybrid Batmobile'},
        {project_name: 'Art Portfolio App', description: 'Build art portfolio app for photographer'},
      ]);
};
