const taskFunc = function (factory, database) {

    const tasks = database.tasks;

    const addTask = function(name){
        for (var i = 0; i < database.tasks.length; i++) {
            if (database.tasks[i].name === name) {
                throw 'You can\'t have the same tasks!';
                return;
            }
        }
        const task = factory.createTask(name);
        database.tasks.push(task);
    }

    const deleteTask = function(name, description){
        const i = database.indexOf(category);
        database.splice(index, 1);
    }

    return{
        addTask,
        deleteTask
    }
}