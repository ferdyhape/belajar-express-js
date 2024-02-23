const responseFormat = require("../utils/responseFormat");
let users = [
  {
    id: 1,
    username: "ferdyhape",
    email: "ferdy@gmail.com",
  },
  {
    id: 2,
    username: "johndoe",
    email: "johndoe@gmail.com",
  },
];

module.exports = {
  index: function (req, res) {
    if (users.length > 0) {
      responseFormat.jsonSuccess(
        req,
        res,
        users,
        "Data user berhasil ditemukan"
      );
    } else {
      responseFormat.jsonError(req, res, "Data user tidak ditemukan");
    }
  },
  store: function (req, res) {
    users.push(req.body);
    responseFormat.jsonSuccess(req, res, users);
  },
  update: function (req, res) {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.username = req.body.username;
        user.email = req.body.email;
        responseFormat.jsonSuccess(
          req,
          res,
          users.filter((user) => user.id == id),
          "Data user berhasil diupdate"
        );
      }
    });
    responseFormat.jsonError(req, res, "Data user tidak ditemukan");
  },
  delete: function (req, res) {
    const id = req.params.id;
    users = users.filter((user) => user.id != id);
    responseFormat.jsonSuccess(req, res, users, "Data user berhasil dihapus");
  },
  show: function (req, res) {
    const id = req.params.id;
    const user = users.filter((user) => user.id == id);
    if (user.length > 0) {
      responseFormat.jsonSuccess(
        req,
        res,
        user,
        "Data user berhasil ditemukan"
      );
    } else {
      responseFormat.jsonError(req, res, "Data user tidak ditemukan");
    }
  },
};
