exports.up = knex => knex.schema.createTable("tasks", table => {
    table.increments("id");

    table.text("title").notNullable();
    table.boolean("priority").notNullable();
    table.boolean("completed").notNullable();

    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")

});
  
exports.down = knex => knex.schema.dropTable("tasks");