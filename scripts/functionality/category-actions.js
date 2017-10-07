const categoryFunc = function (factory, database) {
    
    const isEquivalent = function (a, b) {

        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        if (aProps.length != bProps.length) {
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
    
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }

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
    }

    const deleteCategory = function(name){
        const categoryToBeDeleted = {name};
        const categoriesSet = new Set(categories);
        for (var i = 0; i < categories.length; i++) {
            if (isEquivalent(categories[i], categoryToBeDeleted)) {
                categories.splice(categories[i], 1);
            }
        }
    }

    return{
        addCategory,
        deleteCategory,
    }
}