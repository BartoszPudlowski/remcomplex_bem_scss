const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

window.addEventListener('scroll', function(){
    if(window.screen.width<512){
        if(this.pageYOffset>100){
            header.classList.add("header--down");
            header.classList.remove("header");
            footer.remove();
        }else{
            header.classList.add("header");
            header.classList.remove("header--down");
        }
    }
});

window.addEventListener("resize", function(){
    if(window.screen.width>512){
        header.classList.add("header");
        header.classList.remove("header--down");
        document.body.appendChild(footer);
    }
});