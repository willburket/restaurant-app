export const fetchPlaces = (food,price,lat,lon,distance) => {
    // initialize places service
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const location = new window.google.maps.LatLng(lat,lon);
    const radius = distance; // should be in meters
    const type = 'restaurant';
    const keyword = food;
    const minPrice = price;
    const maxPrice = price;

    const request = {
        location: location,
        radius: radius,
        type: type,
        keyword: keyword,
        minPriceLevel: minPrice,
        maxPriceLevel: maxPrice,
    };
    service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // Process and use the results
          console.log('Results:', results);
        } else {
          console.error('Nearby search request failed:', status);
        }
      });
}

export const loadMap = () =>{
    if(window.google){
        return;
    }
    fetch('http://localhost:3000/key')      // change this
  .then(response => response.json())
  .then(data => {
    const apiKey = data.message.apiKey;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=Function.prototype`;
    document.head.appendChild(script);
    console.log("successfully added")
  })
  .catch(error => console.error('Error fetching API key:', error));
}

