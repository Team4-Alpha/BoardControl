const taskFunc = function (factory, database) {

    const tasks = database.tasks;

    const addTask = function(name){
        if (name==='') {
            throw 'You can\'t have tasks with empty name!';
            return;
        }
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].name === name) {
                $('#task-name').val('');
                throw 'You can\'t have the same tasks!';
                return;
            }
        }
        const task = factory.createTask(name);
        tasks.push(task);
    }

    const deleteTask = function(name){
        const taskToBeDeleted = {name};
        for (var i = 0; i < tasks.length; i++) {
            if (utilsFunc.isEquivalent(tasks[i], taskToBeDeleted)) {
                tasks.splice(tasks[i], 1);
            }
        }
    }

    return{
        addTask,
        deleteTask
    }
}