const qtext = document.querySelector(".qText");
const retext = document.querySelector(".reText");
console.log(qtext, retext);
addEventListener("scroll", function() {
    let value = this.window.scrollY;
    let screen_height = this.screen.height;
    console.log(value, this.screen.height);
    if (value > screen_height / 5) {
        retext.style = "animation: slidein 2s;"
    }
    if (value > screen_height / 5 * 2) {
        qtext.style = "animation: slidein 2s;"
    }
})