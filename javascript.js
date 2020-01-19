const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics='

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();

}

const initMap = () => {
    const options = {
        zoom: 8,
        center: {lat: 42.3601, lng: -71.0589}
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1omF0qNR_s4xUXAXwXAB1Ze3-MllRiWk&callback=initMap"
type="text/javascript"></script>

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);






globe = document.getElementById('globe');
globe.innerHTML = 'hi';

