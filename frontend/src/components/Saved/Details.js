function Details(props){
    const place = props.place 
    if (place){
        return(
            <div>
                <div>
                <h1 className="text-xl font-bold m-2">
                    {place.name}<br/>
                </h1>
                <a href = {place.website} target="_blank" className="text-blue-800 m-2">{place.website}</a><br/>
                </div>
                
                <div>
                    <p className="mx-2">{place.formatted_address}</p><br/>
                    <p className="mx-2">{place.formatted_phone_number}</p><br/>
                </div>
                
                <h2 className="text-m font-bold mx-2">Rating:</h2>
                <p className="mx-2">{place.rating}</p><br/>

                <div className="flex">
                    <ul className="m-2">
                        <h2 className="text-l font-bold">
                            Hours:
                        </h2>
                        {place.opening_hours.weekday_text.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="m-2">
                        <h2 className="text-l font-bold">About:</h2>
                        Delivery: {place.delivery ? 'Yes': 'No'}<br/>
                        Dine In: {place.dine_in ? 'Yes': 'No'}<br/>
                        Reservable: {place.reservable ? 'Yes': 'No'}<br/>
                        Serves Beer: {place.serves_beer ? 'Yes': 'No'}<br/>
                        Serves Wine: {place.serves_wine ? 'Yes': 'No'}<br/>
                        Takeout: {place.takeout ? 'Yes': 'No'}<br/>
                    </div>
                </div>
                
                {/* <ul>
                Reviews:
                {place.reviews.map((item, index) => (
                    <li key={index}>
                        Author: {item.author_name} Rating: {item.rating} Date: {item.relative_time_description}<br/>
                        Review: {item.text}
                    </li>
                ))}
                </ul> */}

            </div>
        )
    }
    
}

export default Details;