module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert Projects
    const projects = await queryInterface.bulkInsert(
      "Projects",
      [
        {
          name: "Project One",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Project Two",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    // Insert Users
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    // Insert Stories (with Project association)
    const stories = await queryInterface.bulkInsert(
      "Stories",
      [
        {
          title: "Story One",
          description: "This is the first story.",
          priority: "High",
          status: "To Do",
          projectId: projects[0].id, // Associating Story with Project
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Story Two",
          description: "This is the second story.",
          priority: "Medium",
          status: "In Progress",
          projectId: projects[1].id, // Associating Story with Project
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    // Insert Tasks (with Story and User associations)
    await queryInterface.bulkInsert("Tasks", [
      {
        title: "Task One for Story One",
        description: "Complete the first task.",
        dueDate: new Date(),
        status: "Not Started",
        assignee: users[0].name, // Assigning task to a user (assignee is a string in the model)
        userId: users[0].id, // Associating Task with User
        storyId: stories[0].id, // Associating Task with Story
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Task Two for Story Two",
        description: "Complete the second task.",
        dueDate: new Date(),
        status: "In Progress",
        assignee: users[1].name, // Assigning task to a user
        userId: users[1].id, // Associating Task with User
        storyId: stories[1].id, // Associating Task with Story
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all tasks, stories, users, and projects
    await queryInterface.bulkDelete("Tasks", null, {});
    await queryInterface.bulkDelete("Stories", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
