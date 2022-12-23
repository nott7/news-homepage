export default function News(props){
    return (
        <div className="news">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}