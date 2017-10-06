const categoryFunc = function (factory, database) {
    
    const categories = database.categories;

    const addCategory = function(name){
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].name === name) {
                throw 'You can\'t have categories with the same name!';
                return;
            }
        }
        const cat = factory.createCategory(name);
        categories.push(cat);
        console.log(categories[0]);
    }

    const deleteCategory = function(name){
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].name === name) {
                categories.splice(i, 1);
            }
        }
    }

    return{
        addCategory,
        deleteCategory,
    }
}