function toggleContent(element) {
  element.classList.toggle('active');
}

window.onscroll=()=>{
    var navbar=document.getElementById("navbar");
    if( document.documentElement.scrollTop > 30)
        navbar.style.top="0px";
    else
        navbar.style.top="-70px";
}