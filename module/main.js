const Task = require("./task");
const Repo = require("./taskRepository");


let t1 = new Task(Repo.get(1));

let t2 = new Task({name: "demo for modules"});
let t3 = new Task({name: "demo for singletons"});
let t4 = new Task({name: "demo for prototypes"});

t1.complete();
t1.save();
t2.save();
t3.save();
t4.save();
