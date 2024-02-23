module.exports = {
  jsonSuccess: function (req, res, data, message) {
    res.json({
      status: "true",
      method: req.method,
      message: message,
      data: data,
    });
  },
  jsonError: function (req, res, message) {
    res.json({
      status: "false",
      method: req.method,
      message: message,
    });
  },
};
