const categoryFunc = function (factory, database) {

    const categories = database.categories;

    const addCategory = function(name){
        if (name==='') {      
            throw 'You can\'t have categories with empty name!';
            return;
        }
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].name === name) {                
                $('#category-name').val('');
                throw 'You can\'t have categories with the same name!';
                return;
            }
        }
        const cat = factory.createCategory(name, []);
        categories.push(cat);
    }

    const deleteCategory = function(name){
        const categoryToBeDeleted = {name};
        for (var i = 0; i < categories.length; i++) {
            if (utilsFunc.isEquivalent(categories[i], categoryToBeDeleted)) {
                categories.splice(categories[i], 1);
            }
        }
    }

    return{
        addCategory,
        deleteCategory,
    }
}