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
  let tempUser  = {
    username: username,
    password: password,
    firstName: firstname,
    lastName: lastname,
    email: email,
    userRole: {id:2, role: 'user'}

  };
  console.log(tempUser);

  // BACK END REQUEST 
   //STEP 3
   xhr.onreadystatechange = function() {
    // An HTTP status code of 200, means OK
    // This means the request was processed correctly
    // and we should have acceptable data
    // readyState == 4 means that the operation is done
    if(this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data); // do this just to check what we've parsed
      sessionStorage.setItem('message', xhr.responseText);
      
      //redirect user to the success page
      window.location.replace("user.html");
    }else if(this.readyState ===4 && xhr.status ===204) {
        console.log("Failed. Status Code: " + xhr.status)
        var reason = {
            code : xhr.status,
            issue : 'Failed to log in. Incorrect Username or Password.'
        };
        console.log(reason);
        sessionStorage.setItem('failMessage', JSON.stringify(reason));
        console.log(sessionStorage.getItem('failMessage'));
    }else if(this.readyState ===4 && xhr.status === 415) {
      console.log("Failed on Frontend. Status Code: " + xhr.status)
      var reason = {
          code : xhr.status,
          issue : 'METHOD NOT ALLOWED'
      };
      console.log(reason);
      sessionStorage.setItem('failMessage', JSON.stringify(reason));
      console.log(sessionStorage.getItem('failMessage'));
  }
    console.log("Processing")
  };


  //STEP 4
  //open the request
  xhr.open("POST", 'http://127.0.0.1:8080/api/users/createUser', true);
  // This URL is setup to respond with a type of application/json
  // when it receives a GET request
  // GET is an HTTP verb/method which means we will be retrieving data
  // with this request
  // We also have the url
  xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  console.log(xhr);
  //STEP 5
  //Send the request
  xhr.send(JSON.stringify(tempUser));



  });