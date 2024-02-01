document.querySelector("main").insertAdjacentHTML("afterbegin", `
    <header>
        <div class="container">Header</div>
    </header>
`);

document.querySelector("main").insertAdjacentHTML("beforeend", `
    <footer>
        <div class="container">Footer</div>
    </footer>
`);

document.querySelector(".sidebar .row").insertAdjacentHTML("beforeend", `
    <div class="col-12 col-md-4">
        <p><b>Sidebar</b></p>
    </div>
`);