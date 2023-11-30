const mongoose = require("mongoose");

exports.connectDatabase = () => {
    mongoose
    .connect("mongodb://localhost:27017/blog")
    .then((con) => console.log(`Database connected: ${con.connection.host}`))
    .catch((err)=> console.log(err));
}