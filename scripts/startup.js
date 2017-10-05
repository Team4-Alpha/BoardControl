
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');
    


    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        
        $(`<div id="myDIV" class="header">
                <h2>${categoryName.val()}</h2>
                <input type="text" id="myInput" placeholder="Title...">
                <span onclick="newElement()" class="addBtn">Add</span>
           </div>
         <ul id="myUL">
            </ul>`).appendTo('#wrapper');
            document.getElementById("category-name").value="";
       
    })
    
    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        
    })
    
    $('#create-task').on('click', () => {
        
        container.taskAct.createTask(taskName.val(), taskDescription.val());

    })
})
