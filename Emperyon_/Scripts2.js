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
//start of highlights
function toggleThem(value) {
    var sheets = document.getElementsByTagName('link');

    sheets[0].href = value;
}

function toggleThemm(value) {
    var sheets = document.getElementsByTagName('link');

    sheets[0].href = value;
}
//end of high lights
//start of trying high without style sheets

