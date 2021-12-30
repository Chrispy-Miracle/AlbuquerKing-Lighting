
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;  
  slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    // minis[i].style.display = "block";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   minis[slideIndex-1].style.display = "none";
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 15000); // Change image every 15 seconds
  
}
// let num;
// function miniClick(num) {
//   // let i;
//   let 
//     // var minis = document.getElementsByClassName("slide-minis")
//   slideIndex = num;
// }