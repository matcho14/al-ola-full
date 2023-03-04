
let head = document.getElementById("header");
window.onscroll= function(){
    if(scrollY>=20){
        head.style.opacity=".9";

    }
    else{
        head.style.opacity="1";
    }
}
