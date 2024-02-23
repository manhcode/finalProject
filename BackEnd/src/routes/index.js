function route(app){
    app.use("/", function(req, res, next) {res.send("NOT FOUND")});
}

module.exports = route;
