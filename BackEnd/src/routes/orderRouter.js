const express = require("express");
const router = express.Router();

const { verifyToken, verifyTokenAdmin } = require("../middleware/CheckLogin");
const orderController = require("../Controllers/orders.controller");

router.post("/", verifyToken, orderController.newOrder);
router.get("/", verifyTokenAdmin, orderController.getAllOrders);

module.exports = router;
