let view = (function view(model) {
    let asd2 = model.getAsd() + 1;

    function getAsd2() {
        return asd2;
    }

    return{
        getAsd2
    }
})(model)