function Card(props) {
    return (
        <section className="card">
            <div>
                <img src={props.card.imgUrl} />
            </div>

            <div className="card-info">
                <div className="card-info-top">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{props.card.country.toUpperCase()}</p>
                    <a href={props.card.mapLink}>View on Google Maps</a>
                </div>
                
                <div className="card-info-main">
                    <h1>{props.card.title}</h1>
                    <h2>{props.card.journeyPeriod}</h2>
                    <p>{props.card.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card