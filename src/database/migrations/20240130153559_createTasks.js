exports.up = knex => knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")

    table.text("title").notNullable();
    table.boolean("priority").notNullable();
    table.boolean("completed").notNullable();


});
  
exports.down = knex => knex.schema.dropTable("tasks");