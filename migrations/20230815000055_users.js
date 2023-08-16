/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("users").then(function (exists){
        if(!exists){
            return knex.schema.createTable("users",function(table){
                table.increments("user_id").primary();
                table.string("name");
                table.string("last_name");
                table.string("hability_user");
                table.string("email");
                table.string("phone");
                table.integer("rate");
            })
        }
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn("users").then(function(exists){
        if(exists){
            return knex.schema.dropTable("users")
        }
    })    
};
