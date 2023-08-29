export const fetchPlaces = async (food,price,lat,lon,distance) => {
    return new Promise((resolve,reject) => {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        const location = new window.google.maps.LatLng(lat,lon);
        const radius = distance; 
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
                resolve(results);
            }
            else if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS){
                resolve("no results");
            }
            else {
                reject(status)
                console.error('Nearby search request failed:', status);
            }
        });
    })
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
  })
  .catch(error => console.error('Error fetching API key:', error));
}

export const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    const item = array.splice(randomIndex,1)[0]
    return item
}