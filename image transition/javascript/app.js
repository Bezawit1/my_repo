var imgBox=document.querySelector(".img-box");
var imgWrap=document.querySelector(".img-wrap");
var original=document.getElementById("original");
var line=document.getElementById("line");

original.style.width=imgBox.offsetWidth +"px"; //to make its width fixed according to the image box


var leftSpace=imgBox.offsetLeft;////we put imagebox.offset because we need the left space of the box

imgBox.onmousemove = function(e){
    // e.pageX; //gives x poition of the cursor with tespect to the body
    //we have to get only the x position of the image box
    //image box has some space from the left side
    //so we should calculate how much space is there
    var boxWidth=(e.pageX-leftSpace) +"px";// this calculation gives us the position of the cursor from the image box.
    imgWrap.style.width=boxWidth;//to change the width whenever we change the cursor position
    line.style.left=boxWidth; //to move the span with the cursor
}