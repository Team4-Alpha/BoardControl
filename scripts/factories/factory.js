const factoryFunc = function () {

    const createTask = function(name, description) {
        return{
            get name(){
                return name;
            },
            get description(){
                return description;
            }
        }
    }

    const createCategory = function (name) {
        return{
            get name(){
                return name;
            }
        }
    }

    return{
        createTask,
        createCategory
    }
}