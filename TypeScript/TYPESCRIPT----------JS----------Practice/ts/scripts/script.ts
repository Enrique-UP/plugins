(function () {
    const details = [];
    document.querySelectorAll("ul > li").forEach((e) => {
        details.push({
            data: e.getAttribute("data-text"),
            id: e.getAttribute("id"), 
            text: e.innerHTML.trim()
        });
    });    
    console.log(details);

    const removeDuplicates = [...new Map(details.map(item => [item.text, item])).values()];
    console.log(removeDuplicates);
    console.log(JSON.stringify(removeDuplicates));

    document.querySelector("ul").insertAdjacentHTML("afterend", "<ol></ol>");

    removeDuplicates.map((e, i) => {
        document.querySelector("ol").innerHTML += `<li data-tt=${e.data} id=${e.id}>${e.text}</li>`;
    });

    removeDuplicates.forEach(function(e, i){
        localStorage.setItem(`id ${i}`, e.id);
        localStorage.setItem(`Data ${i}`, e.data);
        localStorage.setItem(`text ${i}`, e.text);
    });
})();