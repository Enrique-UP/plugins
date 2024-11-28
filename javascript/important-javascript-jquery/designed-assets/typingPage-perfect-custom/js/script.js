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
function sections(section) {
    typing();
    btns();
    let i = 0;
    const element = document.querySelector(`.chatBox section#${section}`);
    element.classList.add("active");
    function sec() {
        let slides = document.querySelectorAll(`.chatBox section#${section} .fw`);
        if (slides[i]) {
            slides[i].classList.add("show");
            window.scrollTo({ top: slides[i].offsetTop + slides[i].offsetHeight, behavior: 'smooth' });
        }
        if (slides.length > ++i) setTimeout(sec, time);
        else{
            removeTyping();
            setTimeout(function(){
                if(element){
                    const rect = element.getBoundingClientRect();
                    const scrollTop = window.scrollY || window.pageYOffset;
                    window.scrollTo({ top: rect.top + scrollTop, behavior: "smooth" });
                }
            }, time);
        }
    }setTimeout(sec, time);
}sections("sec1");