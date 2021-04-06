const Users = require("../models/User");

function authController() {
  return {
    // Post login
    login(req, res) {
      console.log(req.body);
      const { email, password } = req.body;
      const findUser = Users.find(
        (user) => user.email === email && user.password === password
      );

      if (!findUser)
        return res.send({
          isSuccess: false,
        });

      return res.status(200).json({
        isSuccess: true,
        user: findUser.email,
      });
    },
    // getUser(req, res) {
    //   res.send({ name: "Quang", age: 20 });
    // },
  };
}
module.exports = authController;
