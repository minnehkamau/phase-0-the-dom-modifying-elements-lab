// Write your code here!
//removing tag main#main
const element = document.getElementById("main");
element.remove("main");

//creating h1 element
const newHeader = document.createElement("h1");

//creating h1 id
newHeader.id= "victory"
    

//creating innerHtml inside h1
newHeader.innerHTML = "YOUR-NAME is the champion"


