const express = require("express")
const router = express.Router();
const controller = require("../controllers/mainController")
const isAdmin = require("../middlewares/isAdmin");

router.get("/", controller.index);
router.get("/admin", isAdmin, controller.admin);

module.exports = router;