let galleryImages = document.querySelectorAll(".images-gallery");
let getLatestOpenedImg;
let windowWidth = window.innerWith;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("images");
            let setNewImgUrl = getImgUrlPos[1].replace('")','');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "../images" + setNewImgUrl);

            newImg.onload = function(){
                
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendtChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg()");
                newPrevBtn.style.cssText= "left: " + calcImgToEdge +"px;";

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendtChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg()");
                newNextBtn.style.cssText= "right: " + calcImgToEdge + "px;";
            }
        }
    });
}

function closeImg(){
    document.querySelector(".img-window").remove();

}