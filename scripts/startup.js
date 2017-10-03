$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');

    const board = $('#board');

    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        result.append('<div>'+ categoryName.val() +'</div>');
        categoryName.val('');
    })
    //TODO
    //Deleting the div where is the task
    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        result.append('<div>'+ categoryName.val() +'</div>');
        categoryName.val('');
    })
    
    $('#create-task').on('click', () => {
        
        container.taskAct.createTask(taskName.val(), taskDescription.val());

    })
})
