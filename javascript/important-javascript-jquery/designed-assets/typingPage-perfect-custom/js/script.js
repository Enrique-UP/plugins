function typing(){
    document.querySelector(".chatBox section.typing").classList.add("active");
    document.querySelector(".chatBox section.typing .fw").classList.add("show");
}
function removeTyping(){
    document.querySelector(".chatBox section.typing").classList.remove("active");
    document.querySelector(".chatBox section.typing .fw").classList.remove("show");
}
function btns(){
    document.querySelectorAll(".chatBox section .fw.btns > a[onclick]").forEach(function(e){
        e.addEventListener("click", function(){
            e.classList.add("active");
            e.closest(".btns").classList.add("cursorNone");
            e.closest(".btns").querySelectorAll("a").forEach(function(f){
                if(!f.classList.contains("active")) f.remove();
            });
        });
    });
}

const time = 700;
sections("sec1");
function sections(section) {
    typing();
    btns();
    let i = 0;
    document.querySelector(`.chatBox section#${section}`).classList.add("active");
    function sec() {
        let slides = document.querySelectorAll(`.chatBox section#${section} .fw`);
        if (slides[i]) {
            slides[i].classList.add("show");
            window.scrollTo({ top: slides[i].offsetTop + slides[i].offsetHeight, behavior: 'smooth' });
        }
        if (slides.length > ++i) setTimeout(sec, time);
        else{
            removeTyping();
            // setTimeout(() => window.scrollTo({top:`#${section}.offsetTop`, behavior:"smooth"}), time);
            console.log(`#${section}`);
        }
    }setTimeout(sec, time);
}
