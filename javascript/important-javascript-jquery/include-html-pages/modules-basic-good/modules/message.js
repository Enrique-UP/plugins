const message = () => {
    const name = "Jesse";
    const age = 40;
    //return name + ' is ' + age + ' years old.';
    return (`
    <div class="section">
        <span>${name} is ${age} years old.</span>
        <p>Lorem</p>
        <p>Ipsum</p>
    </div>
    `);
};
document.getElementById("demo").innerHTML = message();
    
export default message;