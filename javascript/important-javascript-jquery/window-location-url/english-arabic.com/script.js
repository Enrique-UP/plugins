// (function() {
//     const location = window.location.href;
//     const a = ".com";
//     if (location.includes(`${a}/ar`)) document.querySelectorAll(".links").forEach((e) => e.href = e.href.replace(`${a}/ar`, `${a}`));
//     else document.querySelectorAll(".links").forEach((e) => e.href = e.href.replace(`${a}`, `${a}/ar`));
// })();


(function() {
    const location = window.location.href;
    const a = ".com";
    document.querySelectorAll(".webLink").forEach((e) => e.href = location);
    document.querySelectorAll(".langLink").forEach((e) => e.href = e.href.replace(`${a}`, `${a}/ar`));
})();