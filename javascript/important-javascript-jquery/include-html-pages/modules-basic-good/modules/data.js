const data = () => {
    let content = "";
    const dataText = [
        {
            head: "Lorem1",
            text: "Text1"
        },
        {
            head: "Lorem2",
            text: "Text2"
        },
        {
            head: "Lorem3",
            text: "Text3"
        },
        {
            head: "Lorem4",
            text: "Text4"
        },
        {
            head: "Lorem5",
            text: "Text5"
        }
    ];
    dataText.forEach(function(d) {
        content += `<p>${d.head} & ${d.text}</p>`;
    });
    let dataTag  = document.querySelector("#data");
    if(document.contains(dataTag)){
        dataTag.innerHTML = content;
    }
};
data();

export default data;