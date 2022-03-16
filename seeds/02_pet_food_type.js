/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_food_type CASCADE')
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Seeds'},
    {id: 2, name: 'Pate'},
    {id: 3, name: 'Kibble'},
    {id: 4, name: 'Flakes'}
  ]);
};
