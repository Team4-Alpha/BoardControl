const factoryFunc = function () {

    const createTask = function(name, category) {
        return{
            name,
            description: '',
            category: category
        }
    }

    const createCategory = function (name) {
        return{
            name,
            tasks: []
        }
    }

    return{
        createTask,
        createCategory
    }
}