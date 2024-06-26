// Create User
const getTasksSQL = `
SELECT *
FROM tasks
INNER JOIN users ON tasks.user_id = users.user_id
WHERE users.user_id = $1
AND tasks.task_completed = '0'
ORDER BY tasks.task_id;
`;

const createTaskSQL = `
INSERT INTO tasks (user_id, task) VALUES ($1, $2)
`;

const editTaskSQL = `UPDATE tasks
SET task = ($1)
WHERE task_id = ($2)`;

const deleteTaskSQL = `
UPDATE tasks SET task_completed = B'1' WHERE task_id = $1
`;

module.exports = {
  getTasksSQL,
  createTaskSQL,
  deleteTaskSQL,
  editTaskSQL,
};
