const form = document.getElementById("register");
console.log(form);

form.addEventListener('submit', (event) => {
    // stop form submission
  event.preventDefault();
  //check values in form
//   console.log(form.elements);

  console.log(form.elements[0].value);
  let username = form.elements[0].value;

  console.log(form.elements[1].value);
  let password = form.elements[1].value;


  console.log(form.elements[2].value);
  let firstname = form.elements[2].value

  console.log(form.elements[3].value);
  let lastname = form.elements[3].value

  console.log(form.elements[4].value);
  let email = form.elements[4].value

  console.log(form.elements[5].value);
  let usertype = form.elements[5].value

    //Now we can start AJAX request
  //STEP 1
  // This object is used for asynchronous requests to your server. 
  let xhr = new XMLHttpRequest();

  //STEP 2
  //set up template JS object for JSON parsing
  let tempUser = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    email: email,
    usertype: usertype
  };
  console.log(tempUser);

  // BACK END REQUEST 




  });