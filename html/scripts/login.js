const form = document.getElementById("login-form");
console.log(form);

form.addEventListener('submit', (event) => {
    // stop form submission
  event.preventDefault();
  console.log("login button was pressed")
  //check values in form
  console.log(form.elements);

  console.log(form.elements[0].value);
  let username = form.elements[0].value;

  console.log(form.elements[1].value);
  let password = form.elements[1].value;


    //Now we can start AJAX request
  //STEP 1
  // This object is used for asynchronous requests to your server. 
  let xhr = new XMLHttpRequest();

  //STEP 2
  //set up template JS object for JSON parsing
  let loginTemplate = {
    username: username,
    password: password,
  };
  console.log(loginTemplate);

  // BACK END REQUEST 
   



  });