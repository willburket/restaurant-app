function Details(props){
    const place = props.place 
    if (place){
        return(
            <div>
                {place.name}
            </div>
        )
    }
    
}

export default Details;