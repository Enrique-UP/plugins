const header = () => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./css/header.css";
    document.head.appendChild(link);

    return (`
        <div class="section">
            <p>Header</p>
            <p>Header Top</p>
        </div>
    `);
};

if(document.contains(document.querySelector("header"))){
    document.querySelector("header").innerHTML = header();
    
    document.querySelector(".section").addEventListener("click", function(){
        alert();
    });
};


export default header;