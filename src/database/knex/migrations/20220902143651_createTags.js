//Neste arquivo estamos migrando a forma de criação da tabela para o nosso banco referente aos dados das tags
exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
    
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");

});

exports.down = knex => knex.schema.dropTable("tags");
