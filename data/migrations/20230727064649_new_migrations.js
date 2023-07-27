/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('main', tbl => {
        tbl.increments();
        tbl.text('info')
        .notNullable()
        .unique();
        tbl.integer('someNumber')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('main')
  
};
