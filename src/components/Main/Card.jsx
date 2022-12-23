export default function Card(props){
    return (
        <div className="card">
            <img src={props.image
            } alt="image" />
            <div className="card__info">
                <h1>{props.number}</h1>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
