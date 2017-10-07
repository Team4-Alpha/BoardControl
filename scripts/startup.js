$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');

    const board = $('#board');
    $('#create-category'). on('click',()=> {      
        try{
            container.categoryAct.addCategory(categoryName.val());
            board.append(`<div class='panel panel-default category'> 
            
                            <div class='panel-heading'>${categoryName.val()}
                                <button class='btn btn-danger delete-category'>Delete</button> 
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
                                                <span class='glyphicon glyphicon-remove delete-task'></span>
                                        </div>`);
                    taskName.val('');     

                    const tasksModels =$(categoryBody.children());
                        
                    // tasksModels.on('click',(event) => {

                    //     board.append(`<div id='myModal' class='modal2 fade' role='dialog'>
                    //                     <div class="modal-dialog">
                    //                         <div class="modal-content">
                    //                             <div class="modal-header">
                    //                                 <button type="button" class="close" data-dismiss="modal">&times;</button>
                    //                                 <h4 class="modal-title"></h4>
                    //                             </div>
                    //                             <div class="modal-body">
                    //                                 <p>Description.</p>
                    //                                 <input type="text" class="form-control task-description">
                    //                             </div>
                    //                             <div class="modal-footer">
                    //                                 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    //                             </div>
                    //                         </div>
                    //                     </div>
                    //                  </div>`);
                    //     console.log($(event.target).text());
                    // });

                    $('.delete-task').click(function(e) {
                        $(this).parent().remove();
                    });
                    
                   
                }
                catch (taskErr){
                    alert(taskErr);
                }     
            })
            $('.delete-category').click(function(event) {
                const tar = $(event.target.parentElement);
                let i = 0;
                let categoryToBeDeleted = '';

                //Taking exactly category name 
                while (tar.text()[i] !== ' ') {
                    categoryToBeDeleted += tar.text()[i];
                    ++i;
                }
                //Im removing the last element because its appending one white-space
                const catPlz = categoryToBeDeleted.substring(0, i-1);

                container.categoryAct.deleteCategory(catPlz);
                $(event.target).parent().parent().remove();
            });
        }
        catch (categoryErr){
            alert(categoryErr);
        }
        
    })
    
})
