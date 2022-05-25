let Animalbutton = document.getElementById("addAnimal");



Animalbutton.addEventListener("click", () => {
    console.log("Add animal button was pressed")
//     //STEP 1: Create XmlHttpRequest object
//     let xhr = new XMLHttpRequest();

//     //STEP 1.5: Make an template for the incoming form data
//     //target the form values on our page
//     let form = document.getElementById("field").value;

//     //STEP 2: Define the behaviors of our responses as they come back from the server
//     /*
//         A readyState is a property which signifies that state that the request is currently in.
//         There are several states:
//         0: UNSENT - opening of the request has yet to be called
//         1: OPENED - open() has been called
//         2: HEADERS_RECEIVED: send() has been called[aka the request has been sent], and the headers of the response as well as the status are now available.
//         3: LOADING: downloading the response. Therefore, the responseText (which is a xhr property) is holding partial data.
//         4: DONE: the entire operation is now complete


//         Why need readyStates?
//         Ofter you can implement other transitions or animations to your webpages by triggering them at given readyStates.
//         ex. loading screens
//     */
//    xhr.onreadystatechange = function(){
//        //200 status code is a OK response
//        //which means that everything was processed correctly
//        if(this.readyState == 4 && this.status == 200){
//         let data = JSON.parse(xhr.responseText);
//         console.log(data);
//         renderHTML(data);
//        }
//    };

//    //STEP 3: Open the request
//    xhr.open("GET", `https://zoo-animal-api.herokuapp.com/animals/rand/${form}`);

//    //STEP 4: send the request
//    xhr.send();
})