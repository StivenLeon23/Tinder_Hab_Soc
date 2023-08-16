/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("habilities").then(function(exists){
        if (!exists) {
            return knex.schema.createTable ("habilities", function(table){
                table.increments("hability_id").primary();
                table.string("hability_name").notNullable();
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn("habilities").then(function(exists){
        if (exists){
            return knex.schema.dropTable ("habilities")
        }
    })
};
