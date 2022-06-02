let Zoobutton = document.getElementById("addZoo");



Zoobutton.addEventListener("click", () => {
    console.log("Add zoo button was pressed")
    Zoobutton.disabled = true;
    // ADD CARD DIV 
    const classCardDiv = document.createElement('div');
    classCardDiv.classList.add('card')
    classCardDiv.setAttribute("id","card");
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

    // CREATE INPUT TAG
    let AnimalButton = document.getElementById("addAnimal");
    const inputPtag = document.createElement('p');
    inputPtag.setAttribute("id","input");
    cardBodyDiv.appendChild(inputPtag);
    // ANIMAL EVENT LISTENER
    AnimalButton.addEventListener("click", () => {
        console.log("Add animal button was pressed")
        Zoobutton.disabled = false;
        // USER INPUT 
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

    // ANIMAL CARD FRONT END 
    const classCardDiv = document.createElement('div');
    classCardDiv.classList.add('card')
    classCardDiv.setAttribute("id","Animal");
    document.body.appendChild(classCardDiv);
    

    // ADD CARD BODY DIV THAT IS CHILD OF CARD DIV
    const cardBodyDiv = document.createElement('div');
    classCardDiv.classList.add('card-body');
    classCardDiv.appendChild(cardBodyDiv)

    // add flex align div to card body
    const FlexAlignDiv = document.createElement('div');
    FlexAlignDiv.classList.add('d-flex');
    FlexAlignDiv.classList.add('align-items-center');
    classCardDiv.appendChild(FlexAlignDiv)

    // img 
    const AnimalImg = document.createElement('img');
    

    // ms-3 div 
    const msDiv = document.createElement('div');
    msDiv.classList.add('ms-2');
    FlexAlignDiv.appendChild(msDiv);

    // MAIN orderd list 
    const olList = document.createElement('ol');
    olList.classList.add('list-group');
    olList.classList.add('list-group-light');
    olList.classList.add('list-group-numbered');
    msDiv.appendChild(olList);

    // NAME list items for orded list 
    const nameListItem = document.createElement('li');
    nameListItem.classList.add('list-group-item');
    nameListItem.classList.add('d-flex')
    nameListItem.classList.add('justify-content-between')
    nameListItem.classList.add('align-items-start')
    olList.appendChild(nameListItem);
    // NAME DIV 
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('ms-2');
    nameDiv.classList.add('me-auto');
    nameListItem.appendChild(nameDiv);

    // NAME HEADER
    const headerName = document.createElement('h6');
    nameDiv.appendChild(headerName)
    
    const headerID = document.createElement('h6');
    nameDiv.appendChild(headerID)

    const headerLifespan = document.createElement('h6');
    nameDiv.appendChild(headerLifespan)

    const headerDiet = document.createElement('h6');
    nameDiv.appendChild(headerDiet);

    //target the p tag that will hold the response data
    let resp = document.getElementById("input");


    // resp.append("ID: " + JSON.stringify(data[0].id));
    // resp.append(document.createElement('br'));
    console.log("ID: " + JSON.stringify(data[0].id));
    AnimalID =  JSON.stringify(data[0].id)
    headerID.innerHTML+= "ID: "+AnimalID


    // resp.append("Name: " + JSON.stringify(data[0].name));
    // resp.append(document.createElement('br'));
    console.log("Name: " + JSON.stringify(data[0].name))
    animalName = JSON.stringify(data[0].name)
    headerName.innerHTML+="Name: "+animalName;


    // resp.append("Lifespan: " + JSON.stringify(data[0].lifespan));
    // resp.append(document.createElement('br'));
    console.log("Lifespan: " + JSON.stringify(data[0].lifespan))
    animalLifespan =  JSON.stringify(data[0].lifespan)
    headerLifespan.innerHTML+="Lifespan: "+animalLifespan;


    // resp.append("Diet: " + JSON.stringify(data[0].diet));
    // resp.append(document.createElement('br'));
    console.log("Diet: " + JSON.stringify(data[0].diet))
    animalDiet = JSON.stringify(data[0].diet)
    headerDiet.innerHTML+="Diet: "+animalDiet;

    // resp.append("Image link: " + JSON.stringify(data[0].image_link));
    // resp.append(document.createElement('br'));
    // console.log(JSON.stringify(data[0].image_link));
    var animalLink = JSON.stringify(data[0].image_link)
    console.log(animalLink)
    AnimalImg.src=animalLink
    FlexAlignDiv.appendChild(AnimalImg);
}

let DeleteZooButton = document.getElementById("deleteZoo");

DeleteZooButton.addEventListener("click", () => {
    console.log("delete zoo button was pressed")
    const card = document.getElementById("card")
    card.remove();

    

    const Animalcard = document.getElementById("Animal")
    Animalcard.remove();

})

