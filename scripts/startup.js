$(function(categoryFunc){
    let data = $('#name').val();
    $('#create-category').on('click', categoryFunc.addCategory(data))
})
