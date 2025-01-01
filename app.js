const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Project, Story, Task, User } = require("./models");
const app = express();

app.use(bodyParser.json());

app.post("/projects", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/projects/:id", async (req, res) => {
  try {
    const [updated] = await Project.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProject = await Project.findByPk(req.params.id);
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/projects/:id", async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/stories", async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/stories", async (req, res) => {
  try {
    const stories = await Story.findAll();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/stories/:id", async (req, res) => {
  try {
    const [updated] = await Story.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedStory = await Story.findByPk(req.params.id);
      res.status(200).json(updatedStory);
    } else {
      res.status(404).json({ message: "Story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/stories/:id", async (req, res) => {
  try {
    const deleted = await Story.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("App listening on port 3000!"));
});
