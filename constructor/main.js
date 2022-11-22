const Task = require("./task");


let t1 = new Task("demo for constructors");
let t2 = new Task("demo for modules");
let t3 = new Task("demo for singletons");
let t4 = new Task("demo for prototypes");

t1.complete();
t2.save();
t3.save();
t4.save();
