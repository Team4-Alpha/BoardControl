$(function(){
    console.log(container)
    const data = $('#category-name');
    const result = $('#result');
    $('#create-category').on('click',() => container.categoryAct.addCategory(data.val()))
    result.append('<div>'+ data.val() +'</div>');
})
