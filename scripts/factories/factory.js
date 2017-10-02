const factoryFunc = function () {

    const createTask = function(name, description, category) {
        return{
            get name(){
                return name;
            },
            get description(){
                return description;
            },
            get category(){
                return category;
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