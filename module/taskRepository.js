var repo = function () {

  let save = function (task) {
    console.log("saving to db: " + task.name + " Completed: " + task.completed);
  };
  let get = function (id) {
    console.log("Getting task: " + id);
    return {
      name: "new task from db"
    }
  };
  return {
    get: get,
    save: save,
  }
};


module.exports = repo();
