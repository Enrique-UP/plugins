"use strict";
(function () {
    const footer = document.querySelector("footer .copy");
    if (footer)
        footer.innerHTML = footer.innerHTML.replace("©", "© " + String(new Date().getFullYear()));
})();
