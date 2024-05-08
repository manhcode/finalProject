const OrderModel = require("../models/order.model");
const UserModel = require("../models/user.model");
const MyCourseModel = require("../models/myCourse.model");

module.exports = {
  async newOrder(req, res, next) {
    const userId = req.user.id;
    const { course: courseId, price, status } = req.body;
    const user = await UserModel.findById(userId).exec();

    const isPurchased = await MyCourseModel.findOne({
      studentId: userId,
      courseId,
    });

    if (isPurchased) {
      return res.status(304).json({
        message: "You have purchased this course",
      });
    }

    const course = new OrderModel({
      orderBy: userId,
      user,
      price,
      status,
      course: courseId,
    });
    course
      .save()
      .then((data) => {
        res.status(200).json({
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  async getAllOrders(req, res) {
    const { page, per_page } = req.query;

    OrderModel.find()
      .sort({ _id: -1 })
      .populate("course")
      .then((data) => {
        const currentPage = parseInt(page) || 1;
        const itemsPerPage = parseInt(per_page) || data.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || data.length;

        const items = data.slice(startIndex, endIndex);

        res.json({
          data: items,
          currentPage,
          totalPages,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
};
