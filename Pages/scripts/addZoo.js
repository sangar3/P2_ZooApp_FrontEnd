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
    const addAnimalButton = document.createElement('button');
    const buttonText = document.createTextNode("Add Animal");
    addAnimalButton.append(buttonText);
    addAnimalButton.classList.add('btn');
    addAnimalButton.classList.add('btn-primary');
    addAnimalButton.setAttribute("id","addAnimal");
    cardBodyDiv.appendChild(addAnimalButton);

    let AnimalButton = document.getElementById("addAnimal");

    const inputPtag = document.createElement('p');
    inputPtag.setAttribute("id","input");
    cardBodyDiv.appendChild(inputPtag);

    AnimalButton.addEventListener("click", () => {
    console.log("Add animal button was pressed")

    
    var form = window.prompt("Enter your Animal Number(1-10): ");
    console.log(form)
     //STEP 1: Create XmlHttpRequest object
    let xhr = new XMLHttpRequest();

    //STEP 2: Define the behaviors of our responses as they come back from the server
   xhr.onreadystatechange = function(){
       //200 status code is a OK response
       //which means that everything was processed correctly
       if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        renderAnimalCardHTML(data);
       }
   };

   //STEP 3: Open the request
   xhr.open("GET", `https://zoo-animal-api.herokuapp.com/animals/rand/${form}`);

   //STEP 4: send the request
   xhr.send();

})

})

function renderAnimalCardHTML(data){
    //target the p tag that will hold the response data
    let resp = document.getElementById("input");


    resp.append("ID: " + JSON.stringify(data[0].id));
    resp.append(document.createElement('br'));

    //append all response data to my webpage
    resp.append("Name: " + JSON.stringify(data[0].name));
    resp.append(document.createElement('br'));

    resp.append("Lifespan: " + JSON.stringify(data[0].lifespan));
    resp.append(document.createElement('br'));

    resp.append("Diet: " + JSON.stringify(data[0].diet));
    resp.append(document.createElement('br'));

    resp.append("Image link: " + JSON.stringify(data[0].image_link));
    resp.append(document.createElement('br'));


}