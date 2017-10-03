const container = (function(){
    const factory = factoryFunc();
    const database = databaseFunc();
    const categoryAct = categoryFunc(factory, database);

    return {
        factory,
        database,
        categoryAct
    }
    
}())