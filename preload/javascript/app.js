var menubtn=document.getElementById("menu-btn");
var menu=document.getElementById("menu");
var side=document.getElementById("sideNav");
side.style.right="-250px";
menubtn.onclick=function(){
    if(side.style.right=="-250px"){
        side.style.right="0";
        menu.src="Barber_Shop_img/close.png"
    }
    else{
        side.style.right="-250px";
        menu.src="Barber_Shop_img/menu.png"
    }
}
