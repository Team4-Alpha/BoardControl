const categoryFunc = function (factory, database) {
    
    let index = 0;

    const addCategory = function(name){
        const cat = factory.createCategory(name);
        database.categories.push(cat);
        console.log(database.categories[0].name);
        //TODO
        //Appending the category div
    }

    const deleteCategory = function(name){
        const i = database.indexOf(category);
        database.splice(index, 1);
        //Truncate the specific category div
    }

    return{
        addCategory,
        deleteCategory,
    }
}