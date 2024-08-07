/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
/*exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('tasks').del()
  await knex('users').insert([
    {name: 'user01', password: 'password'}
  ]);
  await knex('tasks').insert([
    {user_id: 1, content: 'テスト'}
    //{user_id: 1, title: 'Sample Task 1', description: 'This is a sample task', category: 'Work', priority: 'High', due_date: '2024-08-15'},
    //{user_id: 1, title: 'Sample Task 2', description: 'This is another sample task', category: 'Personal', priority: 'Low', due_date: '2024-08-20'}
  ]);
};*/
// db/seeds/test_user_and_task.js
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {user_id: 1, title: 'Sample Task 1', description: 'This is a sample task', category: 'Work', priority: 'High', due_date: '2024-08-15'},
        {user_id: 1, title: 'Sample Task 2', description: 'This is another sample task', category: 'Personal', priority: 'Low', due_date: '2024-08-20'}
      ]);
    });
};

