const header = document.querySelector(".header");

window.addEventListener('scroll', function(){
    if(window.screen.width<512){
        if(this.pageYOffset>100){
            header.classList.add("header--down");
            header.classList.remove("header");
        }   else{
            header.classList.add("header");
            header.classList.remove("header--down");
        }
    }

});