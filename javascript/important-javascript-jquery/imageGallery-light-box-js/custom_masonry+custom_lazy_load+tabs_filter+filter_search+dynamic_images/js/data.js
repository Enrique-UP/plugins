let content = "";
const tags = [
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"},
    {date: "2001", category: "best", text: "Loremipsumdolor"},
    {date: "2002", category: "old", text: "Loremipsumdolor"},
    {date: "2003", category: "recent", text: "Loremipsumdolor"},
    {date: "2004", category: "other", text: "Loremipsumdolor"}
];
tags.forEach(function(e) {
    //content += "<div class='" + 'item ' + e.category + "'>" + "<img />" + "<span>" + e.date + "</span>" + "<p>" + e.text + "</p>" + "</div>";
    content += "<div class='" + 'item all ' + e.category + "'>" + "<div class=\"content\">" + "<img />" + "<span>" + e.date + "</span>" + "<p>" + e.text + "</p>" + "</div>" + "</div>";
});
document.querySelector(".projects-list").innerHTML = content;