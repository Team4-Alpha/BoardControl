$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');

    const getName = function(textToBeFiltered){
        let i = 0;
        let categoryToBeDeleted = '';

        //Taking exactly category name 
        while (textToBeFiltered[i] !== ' ') {
            categoryToBeDeleted += textToBeFiltered[i];
            ++i;
        }
        //Im removing the last element because its appending one white-space
        const catPlz = categoryToBeDeleted.substring(0, i-1);
        return catPlz;
    }

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

            categoryName.val('');

            $('.add-task').on('click',(event) => {
                try{
                    const categoryBody = $(event.target.parentElement.previousElementSibling);
                    const categoryHeader = categoryBody.prev('.panel-heading').text();
                    const categoryName = getName(categoryHeader);
                    const taskName = $(event.target.previousElementSibling);
                    container.taskAct.addTask(taskName.val(), categoryName);
                    
    
                    categoryBody.append(`<div class='task-model' data-toggle="modal" data-target="#taskDescriptionModal">${taskName.val()}
                                                <span class='glyphicon glyphicon-remove delete-task'></span>
                                        </div>`);
                    taskName.val('');     

                    const tasksModels =$(categoryBody.children());
                        
                    tasksModels.on('click',(event) => {
                        thisTaskName = event.target.innerText;
                        board.append(`
                        <div id="taskDescriptionModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title" id="myModalLabel">${thisTaskName}</h4>
                              </div>
                              <div class="modal-body">
                              <h4>Description<h4>
                              <input type="text" class="form-control" id="description">
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button"  id='save-description'  class="btn btn-primary">Save</button>
                              </div>
                            </div>
                          </div>`);
                          
                          //kato dostypq butona po class , bara i Create buttona na kategoriqta zatova sym mu napravil ID
                            const saveBtn = $('#save-description')
                            saveBtn.parent().parent().on('click',(event) => {
                                
                                console.log('westcoast')
                            });
                    });

                    $('.delete-task').click(function(e) {
                        const tar = $(e.target.parentElement);
                        const taskToBeDeleted = {name: getName(tar.text()), description: '', category: categoryName};
                        
                        container.taskAct.deleteTask(taskToBeDeleted);
                        tar.remove();
                    });          
                }
                catch (taskErr){
                    alert(taskErr);
                }     
            })

            $('.delete-category').click(function(event) {
                const tar = $(event.target.parentElement);
                categoryToBeDeleted = getName(tar.text());

                container.categoryAct.deleteCategory(categoryToBeDeleted);
                $(event.target).parent().parent().remove();
            });
        }
        catch (categoryErr){
            alert(categoryErr);
        }
        
    })
    
})
