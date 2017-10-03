const taskFunc = function (category) {

    const addTask = function(task){
        task.category = category;
        //TODO
    }

    const deleteTask = function(task){
        //TODO
    }

    return{
        addTask,
        deleteTask
    }
}