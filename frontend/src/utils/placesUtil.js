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

export const loadGoogle = () =>{
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

export const initMap = (lat,lon,restaurant) => {
    // current location
    const place = new window.google.maps.LatLng(lat,lon);
    const current = "You"
    // restaurant location
    const restLat = restaurant.geometry.location.lat();
    const restLon = restaurant.geometry.location.lng();
    const restPlace = new window.google.maps.LatLng(restLat,restLon);
    const name = restaurant.name;

    let infowindow = new window.google.maps.InfoWindow();
  
    let map = new window.google.maps.Map(
        document.getElementById('map'), {center: place, zoom: 15});
    
    let service = new window.google.maps.places.PlacesService(map);
    // add current marker 
    const currentMarker = new window.google.maps.Marker({
        position: place,
        map,
        title: current,
    });
    // add restaurant marker
    const restaurantMarker = new window.google.maps.Marker({
        position: restPlace,
        map,
        title: name,
    });

    const bounds = new window.google.maps.LatLngBounds();

    bounds.extend(currentMarker.getPosition());
    bounds.extend(restaurantMarker.getPosition());

    map.fitBounds(bounds);
   
    // return map;
}

// export const createMarker = (map,lat,lon,title) => {
//     let place = new window.google.maps.LatLng(lat,lon);

//     const marker = new window.google.maps.Marker({
//         position: place,
//         map,
//         title: title,
//     });
// }
