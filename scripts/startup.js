$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');

    const board = $('#board');

    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        board.append('<div>'+ categoryName.val() +'</div>');
        categoryName.val('');
    })
    //TODO
    //Deleting the div where is the task
    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        
    })
    
    $('#create-task').on('click', () => {
        
        container.taskAct.createTask(taskName.val(), taskDescription.val());

    })
})
