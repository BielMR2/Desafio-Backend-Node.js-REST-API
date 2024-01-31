exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id");

    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
  
    table
      .enum("role", ["Administrador", "Usuário"], { useNative: true, enumName: "roles" })
      .default("customer")
      .notNullable()

});
  
exports.down = knex => knex.schema.dropTable("users");