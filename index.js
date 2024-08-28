const express = require("express");

const taskRoutes = require("./routes/tasks.routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
