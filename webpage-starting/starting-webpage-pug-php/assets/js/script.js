"use strict";
(function () {
    document.write("Ts is working with js.");
    const footer = document.querySelector("footer .copy");
    if (footer)
        footer.innerHTML = footer.innerHTML.replace("�", "� " + String(new Date().getFullYear()));
})();
