// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/server");
// mongoose.set("debug", true);
// mongoose.Promise = Promise;

// const todoSchema = new mongoose.Schema({
//   task: String
// });

// const Todo = mongoose.model("Todo", todoSchema);

// module.exports = Todo;

const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/server");

var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("DB is connected")
});

const todoSchema = new mongoose.Schema({
  task: String
});


const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
