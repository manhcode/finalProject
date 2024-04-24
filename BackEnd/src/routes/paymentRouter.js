const express = require("express");
const router = express.Router();


const paymentController = require("../Controllers/payment.controller");

router.post(
  "/create_payment_vnpay",
  paymentController.createPayment
);
router.post("/vnpay_callback", paymentController.callbackVnPay);

module.exports = router;
