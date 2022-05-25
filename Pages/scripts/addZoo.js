let Zoobutton = document.getElementById("addZoo");



Zoobutton.addEventListener("click", () => {
    console.log("Add zoo button was pressed")

    // ADD CARD DIV 
    const classCardDiv = document.createElement('div');
    classCardDiv.classList.add('card')
    document.body.appendChild(classCardDiv);
    

    // ADD CARD BODY DIV THAT IS CHILD OF CARD DIV
    const cardBodyDiv = document.createElement('div');
    classCardDiv.classList.add('card-body');
    classCardDiv.appendChild(cardBodyDiv)


    // ADD CARD TITLE DIV THAT IS A CHILD OF CARD BODY DIV
    const cardTitleDiv = document.createElement('h3');
    var zooName = window.prompt("Enter your Zoo name: ");
    const cardTitleText = document.createTextNode(zooName + " Zoo")
    cardTitleDiv.appendChild(cardTitleText);
    classCardDiv.classList.add('card-body');
    cardBodyDiv.appendChild(cardTitleDiv)

    // ADD CARD DESCR. DIV THAT IS A CHILD OF CARD BODY DIV
    const cardDescDiv = document.createElement('p');
    var zooDesc = window.prompt("Enter your Zoo description: ");
    const cardDescDivText = document.createTextNode(zooDesc);
    cardDescDiv.appendChild(cardDescDivText);
    cardDescDiv.classList.add('card-text');
    cardBodyDiv.appendChild(cardDescDiv);


    // CREATE ADD ANIMAL BUTTON 


})