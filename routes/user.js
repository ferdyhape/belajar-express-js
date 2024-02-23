const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

// router.get("/", userController.index);
// router.get("/:id", userController.show);
// router.post("/", userController.store);
// router.put("/:id", userController.update);
// router.delete("/:id", userController.delete);

router
  .route("/")
  .get(userController.index) // Handles GET requests to /user
  .post(userController.store); // Handles POST requests to /user

router
  .route("/:id")
  .get(userController.show) // Handles GET requests to /user/:id
  .put(userController.update) // Handles PUT requests to /user/:id
  .delete(userController.delete); // Handles DELETE requests to /user/:id

module.exports = router;
