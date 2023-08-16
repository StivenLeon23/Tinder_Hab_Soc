/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("clients").then(function(exists){
        if (!exists) {
            return knex.schema.createTable ("clients", function (table){
                table.increments("id_client").primary();
                table.string("client_Name").notNullable();
                table.string("work_Description").notNullable();
                table.string("duration").notNullable();
                table.boolean("advance").defaultTo(false);
                table.date("date_start");
                table.date("date_finish");
                table.integer("score");
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn("clients").then(function(exists){
        if(exists){
            return knex.schema.dropTable ("clients")
        }
    })
};
