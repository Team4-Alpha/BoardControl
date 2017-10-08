$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');

    const getName = function(textToBeFiltered){
        let spaces = 0;
        let i = 0;
        let categoryToBeDeleted = '';

        //Taking exactly category name 
        while (textToBeFiltered[i]) {
            if(textToBeFiltered[i] !== ' '){
                categoryToBeDeleted += textToBeFiltered[i];
            }
            if(textToBeFiltered[i] === ' ' && textToBeFiltered[i+1] !== ' '){
                categoryToBeDeleted += textToBeFiltered[i];
            }
            if(textToBeFiltered[i] === ' ' && textToBeFiltered[i+1] === ' '){
                break;
            }
            i++;
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
                    
    
                    categoryBody.append(`<div class='task-model' data-toggle="modal" data-target="#task-modal">${taskName.val()}
                                                <span class='glyphicon glyphicon-remove delete-task'></span>
                                        </div>`);
                    taskName.val('');     

                    const tasksModel = $(categoryBody.children().last());
                        
                    tasksModel.on('click',(event) => {
                        thisTaskName = event.target.innerText;
                        const task = container.taskAct.getTask(thisTaskName, categoryName);
                        
                        $('.task-title').text(thisTaskName);
                        $('#task-description').val(task.description);

                        $('.save-description').on('click', (e) => {
                            let newDescription = $('#task-description').val();
                            task.description = newDescription;
                            console.log(task.description);
                        })
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
