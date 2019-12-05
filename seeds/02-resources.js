
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: "duster", description: "To dust batcave", project_id: 2},
        {resource_name: "broom", description: "sweep and shoo away bats", project_id: 2},
        {resource_name: "tool kit", description: "repair batmobile engine", project_id: 1},
        {resource_name: "bat suit", description: "mission", project_id: 3},
        {resource_name: "grapple", description: "mission", project_id: 3}
      ]);
};
