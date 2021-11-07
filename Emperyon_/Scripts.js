//start of light drop down
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
        }
    }
}
//end of light dropdown
//start of slide section
var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var  slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 3000);
}
//end of slide bar
//start of bottom text from big programmers
var slideIndexx = 0;
showSlidess();


function showSlidess() {
    var j;
    var  slidess = document.getElementsByClassName('myTexts');
    for (j = 0; j < slidess.length; j++) {
        slidess[j].style.display = 'none';
    }
    
    slideIndexx++;
    if (slideIndexx > slidess.length) {slideIndexx = 1}
    slidess[slideIndexx-1].style.display = 'block';
    setTimeout(showSlidess, 4000);
}