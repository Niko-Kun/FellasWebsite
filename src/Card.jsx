function Card(fellas) {
    return (
        <div className="card-box">
            <div className="card">
                <img className="cardImg" src={fellas.image}></img>
                <h2>{fellas.name}</h2>
                <h2>{fellas.number}</h2>
                <p className="cardDesc">{fellas.desc}</p>
            </div>
        </div>
    );
}

export default Card
