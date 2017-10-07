const factoryFunc = function () {

    const createTask = function(name) {
        return{
            name
        }
    }

    const createCategory = function (name) {
        return{
            name
        }
    }

    return{
        createTask,
        createCategory
    }
}