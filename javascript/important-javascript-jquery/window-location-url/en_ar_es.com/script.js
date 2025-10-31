// (function () {
//     var url = window.location.href;
//     // var url = "http://localhost/link.com/es/about.php";

//     const beforeCom = url.split(".com/")[0];
//     console.log("beforeCom :- " + beforeCom);
//     var base = url.split("/").slice(0, 4).join("/") + "/";
//     console.log(base);

//     const domainWithCom = beforeCom.split("/").pop() + ".com";
//     const parsedUrl = new URL(url);
//     const parts = parsedUrl.pathname.split("/").filter(Boolean);

//     let pageName = "";
//     if (parts.length > 1) {
//         const last = parts.pop();
//         pageName = last.includes(".") ? last.split(".")[0] : (!/^[a-z]{2}$/i.test(last) ? last : "");
//     }

//     console.log("Domain:", domainWithCom);
//     console.log("Page:", pageName);

//     document.querySelectorAll(".links > a").forEach(function (e) {
//         if(e.classList.contains("english")) e.href = base + "en/" + pageName;
//         else if(e.classList.contains("arabic")) e.href = base + "ar/" + pageName;
//         else if(e.classList.contains("spanish")) e.href = base + "es/" + pageName;
//         else e.href = base;
//     });
// })();



// (function () {
//     var url = window.location.href;
//     // var url = "http://localhost/link.com/es/about.php";
//     // var url = "http://localhost/link.com/es/about";

//     const parsedUrl = new URL(url);

//     const baseUrl = parsedUrl.origin + "/";

//     let hostParts = parsedUrl.pathname.split("/").filter(Boolean);
//     let domain = hostParts.find(part => /\.(com|in|net|org|co\.in)$/i.test(part));

//     let pageName = hostParts[hostParts.length - 1];

//     console.log("Base URL:", baseUrl);
//     console.log("Domain:", domain);
//     console.log("Page Name:", pageName);


//     // console.log("Domain:", domainWithCom);
//     // console.log("Page:", pageName);

//     // document.querySelectorAll(".links > a").forEach(function (e) {
//     //     if(e.classList.contains("english")) e.href = base + "en/" + pageName;
//     //     else if(e.classList.contains("arabic")) e.href = base + "ar/" + pageName;
//     //     else if(e.classList.contains("spanish")) e.href = base + "es/" + pageName;
//     //     else e.href = base;
//     // });
// })();

(function () {
    function parseLocalUrl(url, options = { keepExtension: false }) {
        const parsed = new URL(url);
        const baseUrl = parsed.origin + "/";

        const parts = parsed.pathname.split("/").filter(Boolean);

        const domainRegex = /\.(com|in|net|org|co\.in|io|dev|edu)$/i;
        const domain = parts.find(p => domainRegex.test(p)) || "";

        let pageName = "";
        if (!url.endsWith("/")) {
            const last = parts.length ? parts[parts.length - 1] : "";
            if (last) {
                pageName = options.keepExtension ? last : last.split(".")[0];
            }
        }

        return { baseUrl, domain, pageName };
    }
    const { baseUrl, domain, pageName } = parseLocalUrl(window.location.href);
    console.log("baseUrl = " + baseUrl);
    console.log("domain = " + domain);
    console.log("pageName = " + pageName);

    document.querySelectorAll(".links > a").forEach(function (e) {
        if (e.classList.contains("english")) e.href = baseUrl + domain + "/en/" + pageName;
        else if (e.classList.contains("arabic")) e.href = baseUrl + domain + "/ar/" + pageName;
        else if (e.classList.contains("spanish")) e.href = baseUrl + domain + "/es/" + pageName;
        else e.href = baseUrl + domain;
    });
})();

