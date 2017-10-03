const taskFunc = function (factory, database) {

    const addTask = function(name, description){
        const task = factory.createTask(name, description);
        database.tasks.push(task);
        //Test
        console.log(database.tasks);
        //TODO
    }

    const deleteTask = function(name, description){
        const i = database.indexOf(category);
        database.splice(index, 1);
        //TODO
    }

    return{
        addTask,
        deleteTask
    }
}