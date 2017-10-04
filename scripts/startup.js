
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');
    
    const board = $('#board');
    $('p').attr("id","paragraph");
    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        document.getElementById("paragraph").innerHTML=categoryName.val();
        document.getElementById("category-name").value = "";

       
    })
    
    // $(document).ready(function(){
       
    //     $("#create-category").click(function(){
    //         $("p").text(('#category-name').value);
           
    //     });
    // });
    //TODO
    //Deleting the div where is the task
    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        
    })
    
    $('#create-task').on('click', () => {
        
        container.taskAct.createTask(taskName.val(), taskDescription.val());

    })
})
