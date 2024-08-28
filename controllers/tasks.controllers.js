let taskList = require("../mocks/mocks");

const getTasks = (req, res) => {
  res.send(taskList);
};

const createTask = (req, res) => {
  console.log(req.body);
  const task = {
    id: Date.now().toString(),
    title: req.body.title,
  };

  taskList.push(task);

  res.status(201).send(task);
};

const updateTask = (req, res) => {
  const id = req.params.id;

  taskList.some((task) => {
    if (task.id === id) {
      task.title = req.body.title;
    }
  });

  res.sendStatus(200);
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  taskList = taskList.filter((task) => task.id !== id);

  res.sendStatus(200);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
