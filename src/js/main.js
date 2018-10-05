//Setting up variables:

//let description =
let menu = document.getElementById('menu');
let apiRequest = new XMLHttpRequest();
let description0 = document.getElementById('description0');
let description2 = document.getElementById('description2');
let description3 = document.getElementById('description3');
let description4 = document.getElementById('description4');
let description5 = document.getElementById('description5');
let description6 = document.getElementById('description6');
let description7 = document.getElementById('description7');
let description8 = document.getElementById('description8');
let description9 = document.getElementById('description9');
let description10 = document.getElementById('description10');
let description11 = document.getElementById('description11');

let error = document.getElementById('error');

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        getMenu();
    }
}

function getMenu(){
  //alert ("are you hangry?");
  let url = 'https://entree-f18.herokuapp.com/v1/menu/12';

  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}

//function onError(){

  //}


function onSuccess(){

  if (apiRequest.status == "200"){
    let response = JSON.parse(apiRequest.responseText);

    description0.innerHTML = response.menu_items[0].description;
    description1.innerHTML = response.menu_items[1].description;
    description2.innerHTML = response.menu_items[2].description;
    description3.innerHTML = response.menu_items[3].description;
    description4.innerHTML = response.menu_items[4].description;
    description5.innerHTML = response.menu_items[5].description;
    description6.innerHTML = response.menu_items[6].description;
    description7.innerHTML = response.menu_items[7].description;
    description8.innerHTML = response.menu_items[8].description;
    description9.innerHTML = response.menu_items[9].description;
    description10.innerHTML = response.menu_items[10].description;
    description11.innerHTML = response.menu_items[11].description;



} else {

  onError();
}

    error.style.display = 'none'; // Turn "on" output
    output.style.display = 'block';
}

function onError() {
  // Update the text inside error
  if (apiRequest.responseText) {
    document.querySelector('#error div').innerHTML = JSON.parse(apiRequest.responseText).message;
  } else {
    document.querySelector('#error div').innerHTML = "An error has occurred. Please try again.";

    output.style.display = 'none'; // Turn "on" error
    error.style.display = 'block';
  }
}
