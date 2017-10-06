const taskFunc = function (factory, database) {

    const addTask = function(name){
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