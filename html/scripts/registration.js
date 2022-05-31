const form = document.getElementById("register");
console.log(form);

form.addEventListener('submit', (event) => {
    // stop form submission
  event.preventDefault();
  //check values in form
  console.log(form.elements);
  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
  console.log(form.elements[2].value);
  console.log(form.elements[3].value);
  console.log(form.elements[4].value);
  console.log(form.elements[5].value);
  });