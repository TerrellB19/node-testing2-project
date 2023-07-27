/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('main').truncate()
  await knex('main').insert([
    {id: 1, info: 'Value1', someNumber: 5},
    {id: 2, info: 'Value2', someNumber: 10},
    {id: 3, info: 'Value3', someNumber: 15}
  ]);
};
