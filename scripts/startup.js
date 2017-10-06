
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');

    const board = $('#board');
    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        
        board.append(`<div class='panel panel-default category'>
                          <div class='panel-heading'>${categoryName.val()}</div>
                          <div class='panel-body category-body'></div>
                          <div class='footer'>
                               <input type='text' class='form-control task-name'>
                               <button type='button' class='btn btn-primary add-task'>Add</button>
                          </div>    
                      </div>`);
            $('#category-name').val('');

            

            $('.add-task').on('click',(event) => {
                const taskName = $(event.target.previousElementSibling);
                container.taskAct.addTask(taskName.val());
                let categoryBody = $(event.target.parentElement.previousElementSibling);

                categoryBody.append(`<div class='task-model'>${taskName.val()}</div>`);
                taskName.val('');     
                $('#task-model').on('click',() => {
                    
                });
            })
    })

    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();   
    })
})
