var ex = 0;
window.addEventListener('scroll', function (event) {
})

window.addEventListener('scroll', function (event) {
    const scrollable = document.getElementById("back").scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrolled)
    ex = (scrolled / scrollable) * 100; 
    if (ex >= 0 && ex <= 100) {
        if (ex >= 0 && ex < 40) {
            canvas.style.background = `radial-gradient(circle, rgba(5,174,241,1) ${ex}%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 80%)`
        } else if (ex >= 40 && ex < 95) {
            canvas.style.background = `radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(5,174,241,1) ${ex}%, rgba(0,0,0,1) 80%)`
        } else if (ex >= 95 && ex <= 100) {
            canvas.style.background = `radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 80%, rgba(5,174,241,1) ${ex}%)`
        }
    }

    title.style.fontSize = `${ex}%`
    subtitle.style.fontSize = `${ex}%`
    
    if (scrollable > scrolled) {
        title.style.filter = `blur(${10 - ex / 8}px)`
        subtitle.style.filter = `blur(${10 - ex / 8}px)`
        canvas.style.position = "fixed"
        canvas.style.top = "0px"
        canvas.style.display = "flex"
    }
    if (scrollable <= scrolled) {
        title.style.filter = `blur(0px)`
        subtitle.style.filter = `blur(0px)`
        canvas.style.position = "absolute"
        canvas.style.top = "2100px"
        canvas.style.background = `black`
    }
});

var subtitle = document.getElementById("title");
var title = document.getElementById("subtitle");
var canvas = document.getElementById("hero");

