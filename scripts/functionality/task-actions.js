const taskFunc = function (factory, database) {
    const addTask = function(name, category,description){
        const categories = database.categories;
        if (name==='') {
            throw 'You can\'t have tasks with empty name!';
            return;
        }

        for (var i = 0; i < categories.length; i++) {
            if (categories[i].name === category) {
                for (var j = 0; j < categories[i].tasks.length; j++) {
                    if (categories[i].tasks[j].name === name) {
                        $('.task-name').val('');
                        throw 'You can\'t have the same tasks!';
                        return;
                    }
                }
                const task = factory.createTask(name, category,description);
                categories[i].tasks.push(task);
                return;
            }
        } 
    }

    const changeDescription = function(){

    }

    const deleteTask = function(task){
        const categories = database.categories;
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].name === task.category) {
                for (var j = 0; j < categories[i].tasks.length; j++) {
                    if (utilsFunc.isEquivalent(categories[i].tasks[j], task)) {
                        categories[i].tasks.splice(categories[i].tasks[j], 1);
                    }
                }
            }
        }
    }

    return{
        addTask,
        deleteTask
    }
}