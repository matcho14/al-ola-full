
let head = document.getElementById("header");
window.onscroll= function(){
    if(scrollY>=20){
        head.style.opacity=".9";

    }
    else{
        head.style.opacity="1";
    }
}



const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting);
    })
        console.log(entries);
},{
    rootMargin :"-100px"
})


cards.forEach(card=>{
    observer.observe(card);
})