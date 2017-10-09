QUnit.test( 'ThrowsExceptionWhenCategoryNameIsEmpty', function( assert ) {
  let database=databaseFunc();
  let func = function(){categoryFunc(factoryFunc(),database).addCategory('')};
   assert.throws(func , 'You can\'t have categories with empty name!');
  });

  QUnit.test( 'ThrowsExceptionWhenCategoryNameIsTheSame', function( assert ) {
    let database=databaseFunc();
    let func1 = function(){categoryFunc(factoryFunc(),database).addCategory('Category')};
    func1();
    assert.throws(func1, 'You can\'t have categories with the same name!');
  });

  QUnit.test( 'ThrowsExceptionWhenCategoryNameIsTheSame', function( assert ) {
    let database=databaseFunc();
    let categoryMock ={
          name: 'Category',
          tasks: []
      }
    let func1 = function(){categoryFunc(factoryFunc(),database).addCategory('Category')};
    assert.deepEqual(func1,categoryMock);
  });