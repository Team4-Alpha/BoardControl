
$(function(){
    const categoryName = $('#category-name');
    const taskName = $('#task-name');
    const taskDescription = $('#task-description');
    const notes= $("myInput");

    $('#create-category').on('click',() => {
        container.categoryAct.addCategory(categoryName.val());
        
        $(`<div id="myDIV" class="header">
                <h2>${categoryName.val()}</h2>
                <input type="text" id="myInput" placeholder="Title...">
                <button type="button" id="taskbtn" 
                    >Add
                </button>
           </div>
         <ul id="myUL">
            </ul>`).appendTo('#wrapper');
            document.getElementById("category-name").value="";

       
    })
    
    $('#taskbtn').on('click',() => {
        $(` <li>${notes.val()}</li>
                <button id="deletebtn" >Delete</button>
         `).appendTo('#myUL');
            document.getElementById("myInput").value="";
       
       
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
