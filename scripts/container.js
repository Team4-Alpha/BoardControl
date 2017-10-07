const container = (function(){

    const factory = factoryFunc();
    const database = databaseFunc();
    const categoryAct = categoryFunc(factory, database);
    const taskAct = taskFunc(factory, database);

    return {
        factory,
        database,
        categoryAct,
        taskAct,
    }
    
}())