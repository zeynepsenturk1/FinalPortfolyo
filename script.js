currentTime = new Date();

if (currentTime.getHours() < 12)
    document.write("<div class='greetings'><b>Günaydın! </b></div>");
else if (currentTime.getHours() < 17)
    document.write("<div class='greetings'><b>Tünaydın! </b></div>");
else
    document.write("<div class='greetings'><b>İyi Akşamlar! </b></div>");



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.write("<div class='date'>" + today + "</div>");



var screensaver_task = null;
var start_screensaver = () => {
    document.querySelector(".screensaver-layout").classList.add("hidden");
    if (screensaver_task) {
        clearTimeout(screensaver_task);
        screensaver_task = null;
    }
    screensaver_task = setTimeout(() => { 
        document.querySelector(".screensaver-layout").classList.remove("hidden");
    }, 8 * 1000);
}
document.addEventListener("mousemove", start_screensaver);
document.addEventListener("click", start_screensaver);
start_screensaver();


