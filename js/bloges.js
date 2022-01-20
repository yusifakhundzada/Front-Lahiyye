var sliderWidth=document.querySelector(".menu-2-img").clientWidth;
var sliderLength=document.querySelectorAll(".menu-2-img li").length;
var mySlidewidth=sliderWidth*sliderLength;
var sliderUl=document.querySelector(".menu-2-img ul");
sliderUl.style.width=mySlidewidth+"px";
var c=0;
function mySlider(){
    c++
    if(c==sliderLength){
        c=0
    }
    sliderUl.style.left=-(c*sliderWidth)+"px"
}
setInterval(function()  {
    mySlider()
}, 2000);