
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');
    const notes= $("myInput");

    const board = $('#board');


    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        
        board.append(`<div class="panel panel-default category">
                          <div class="panel-heading">${categoryName.val()}</div>
                          <div class="panel-body category-body"></div>
                          <div class="footer">
                               <input type="text" class="form-control task-name">
                               <button type="button" class="btn btn-primary add-task">Add</button>
                          </div>    
                      </div>`);
            $("#category-name").val('');

            const categoryBody = $('.category-body');

            categoryBody.app
            $('.add-task').on('click',() => {
                categoryBody.append(`<div>asd</div>`);
        
                 $("#task-name").val('');
               
               
            })
    })
    
    


    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        
    })
    
    $('#create-task').on('click', () => {
        
        container.taskAct.createTask(taskName.val(), taskDescription.val());

    })
})
