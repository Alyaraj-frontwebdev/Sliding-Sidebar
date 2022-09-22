let btn = document.querySelector('.button');
let sidebar = document.querySelector('.sidebar');
let close = document.querySelector('.close');
btn.addEventListener('click', ()=>{
    sidebar.style.transform = "translateX(0px)";
});
close.addEventListener('click', ()=>{
    sidebar.style.transform = "translateX(-250px)";
})