const categoryFunc = function (database) {
    
    let index = 0;

    const addCategory = function(category){
        
        //database[index++] = category;
        console.log(category);
        //TODO
        //Appending the category div
    }

    const deleteCategory = function(category){
        const i = database.indexOf(category);
        database.splice(index, 1);
        //Truncate the specific category div
    }

    return{
        addCategory,
        deleteCategory,
    }
}