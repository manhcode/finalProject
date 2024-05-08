const userRouter = require("./userRouter");
const courseRouter = require("./courseRouter");
const paymentRouter = require("./paymentRouter");
const orderRouter = require("./orderRouter");

function route(app) {
  app.use("/api/user", userRouter);
  app.use("/api/course", courseRouter);
  app.use("/api/payment", paymentRouter);
  app.use("/api/orders", orderRouter);
  app.use("/", function (req, res, next) {
    res.send("NOT FOUND");
  });
}

module.exports = route;
