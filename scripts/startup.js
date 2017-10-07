$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');

    const board = $('#board');
    $('#create-category'). on('click',()=> {      
        try{
            container.categoryAct.addCategory(categoryName.val());
            board.append(`<div class='panel panel-default category'> 
            
                          <div class='panel-heading'>${categoryName.val()}
                            <button class='btn btn-danger'>Delete</button> 
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
    
                    categoryBody.append(`<div class='task-model'>${taskName.val()}
                    <span class="glyphicon glyphicon-remove"></span>
                  </div>`);
                    taskName.val('');     

                    const tasksModels =$(categoryBody.children());

                    tasksModels.on('click',(e) => {  
                        console.log($(e.target).text());

                        
                    });
                    $('.glyphicon').click(function(e) {
                        e.preventDefault();
                        $(this).parent().remove();
                    });
                    
                   
                }
                catch (taskErr){
                    alert(taskErr);
                }     
            })
            $(".btn-danger").click(function(event) {
                const tar = $(event.target.parentElement);
                let i = 0;
                let categoryToBeDeleted = '';
                while (tar.text()[i] !== ' ') {
                    categoryToBeDeleted += tar.text()[i];
                    ++i;
                }
                const catPlz = categoryToBeDeleted.substring(0, i-1);

                console.log(catPlz);
                container.categoryAct.deleteCategory(catPlz);
                $(event.target).parent().parent().remove();
            });
        }
        catch (categoryErr){
            alert(categoryErr);
        }
        
    })
    
})
