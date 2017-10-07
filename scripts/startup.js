
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');

    const board = $('#board');
    $('#create-category'). on('click',()=> {      
        try{
            container.categoryAct.addCategory(categoryName.val());
            board.append(`<div class='panel panel-default category'> 
            <button class='btn-danger'>Delete</button> 
                          <div class='panel-heading'>${categoryName.val()}
                          </div>
                          <div class='panel-body category-body'></div>
                          <div class='footer'>
                               <input type='text' class='form-control task-name'>
                               <button type='button' class='btn btn-primary add-task'>Add</button>
                          </div>    
                      </div>`);
            $('#category-name').val('');

            

            $('.add-task').on('click',(event) => {
                try{
                    const taskName = $(event.target.previousElementSibling);
                    container.taskAct.addTask(taskName.val());
                    const categoryBody = $(event.target.parentElement.previousElementSibling);
    
                    categoryBody.append(`<div class='task-model'>${taskName.val()}</div>`);
                    taskName.val('');     

                    const tasksModels =$(categoryBody.children());

                    tasksModels.on('click',() => {
                        console.log(taskName.val());

                        
                    });
                    
                   
                }
                catch (taskErr){
                    alert(taskErr);
                }     
            })
        }
        catch (categoryErr){
            alert(categoryErr);
        }
        $(".btn-danger").click(function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });
    })

})
