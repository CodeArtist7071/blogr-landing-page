const navSlide =()=>{
    const humburger = document.querySelector('.hamburger');
    const nav =  document.querySelector('.nav');
     humburger.addEventListener('click', () =>{
       nav.classList.toggle('nav-active')
       humburger.classList.toggle('toggle')
     });
}
navSlide();