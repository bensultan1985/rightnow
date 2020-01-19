const initMap = () => {
    const options = {
        zoom: 8,
        center: {lat: 42.3601, lng: -71.0589}
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
}

// Clear previous results and display results to webpage






//globe = document.getElementById('map');
//globe.innerHTML = 'hi';


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '199712351201296',
      xfbml      : true,
      version    : 'v5.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
