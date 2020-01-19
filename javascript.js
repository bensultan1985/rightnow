const initMap = () => {
    const options = {
        zoom: 8,
        center: {lat: 42.3601, lng: -71.0589}
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
}

// Clear previous results and display results to webpage






globe = document.getElementById('map');
globe.innerHTML = 'hi';

