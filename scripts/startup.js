
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');
    const taskInput =$('#myInput');
    


    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        
        $(`<div id="myDIV" class="header">
                <h2>${categoryName.val()}</h2>
                <input type="text" id="myInput" placeholder="Title...">
                <span id="myTaskbut" class="addBtn">Add</span>
           </div>
         <ul id="myUL">
            </ul>`).appendTo('#wrapper');
            document.getElementById("category-name").value="";

       
    })
    
    $('#delete-category').on('click',() => {
        container.categoryAct.deleteCategory();
        
    })
    
    $('#myTaskbut').on('click',() => {
        //container.taskAct.addTask(taskName.val(), taskDescription.val());
        $(`<div id="myTaskDIV">
             <p>${taskInput.val()}</p>
          </div>`).appendTo('#myDIV');
    //document.getElementById("myInput").value="";
    })
})
