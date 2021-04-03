const users = [
  { id: "1", name: "Quang", age: 20 },
  { id: "2", name: "Hieu", age: 23 },
];

function getUsers(req, res) {
  (req, res) => {
    res.status(200).json({
      isSuccess: true,
      message: "success",
      users,
    });
  };
}

function getUserById(req, res) {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user)
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the id user",
    });

  return res.status(200).json({
    isSuccess: true,
    message: "success",
    user,
  });
}

function createUser(req, res) {
  users.push(req.body);
  res.status(201).json({
    isSuccess: true,
    message: "success",
    user: req.body,
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the id user",
    });
  }
  users[userIndex] = { id, ...req.body };
  return res.status(200).json({
    isSuccess: true,
    message: "success",
    user: users[userIndex],
  });
}

function deleteUser(req, res) {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the id user",
    });
  }
  const user_delete = users.splice(userIndex, 1);
  return res.send({
    isSuccess: true,
    message: "success",
    user: user_delete,
  });
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
