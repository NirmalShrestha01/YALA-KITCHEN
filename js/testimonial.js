var sliderBtn = document.getElementsByClassName("slider-btn");

var slide = document.getElementById("slide");

sliderBtn[0].onclick = function(){
    slide.style.transform = "translateX(0%)";
    for(i=0; i<3 ; i++){
        sliderBtn[i].classList.remove("active");
    }
    this.classList.add("active");
}

sliderBtn[1].onclick = function(){
    slide.style.transform = "translateX(-33%)";
    for(i=0; i<3 ; i++){
        sliderBtn[i].classList.remove("active");
    }
    this.classList.add("active");
}

sliderBtn[2].onclick = function(){
    slide.style.transform = "translateX(-66.5%)";
    for(i=0; i<3 ; i++){
        sliderBtn[i].classList.remove("active");
    }
    this.classList.add("active");
}