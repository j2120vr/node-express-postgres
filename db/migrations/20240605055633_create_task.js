/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    /*return knex.schema.hasTable('tasks').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('tasks', function(t) {
                t.increments('id').primary().unsigned().notNullable();
                t.integer('user_id').notNullable().references('id').inTable('users');
                t.string('content').notNullable();
                table.text('description');
                table.string('category'); // New column for category
                table.string('priority'); // New column for priority
                table.date('due_date'); // New column for due date
                table.timestamps();
            });
        }else{
            return new Error("The table already exists");
        }
    });*/
    return knex.schema.createTable('tasks', function(table) {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.string('title');
        table.text('description');
        table.string('category'); // New column for category
        table.string('priority'); // New column for priority
        table.date('due_date'); // New column for due date
        table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/*exports.down = function(knex) {
    return knex.schema.hasTable('tasks').then(function(exists) {
        if (exists) {
            return knex.schema.dropTable('tasks');
        }
    });
};*/
exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  };
