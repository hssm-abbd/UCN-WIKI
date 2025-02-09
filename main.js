function change(clicked, id) {
    clicked.parentElement.querySelector('.Selected').classList.remove('Selected');
    clicked.classList.add('Selected');
    var temp = document.getElementById(id);
    var slide1 = temp.querySelector('#slide1');
    var slide2 = temp.querySelector('#slide2');
    if(slide1.classList.contains('selected')){
        slide1.classList.remove('selected');
        slide2.classList.add('selected');
        temp.style.transform = "translate3d(-100%, 0px, 0px)";
    }else{
        slide2.classList.remove('selected');
        slide1.classList.add('selected');
        temp.style.transform = "translate3d(0px, 0px, 0px)";
    }
};