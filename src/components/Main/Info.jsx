import News from "./Info/News"

export default function Info(){
    return (
        <div className="info">
            <h1>New</h1>
            <News 
                title="Hydrogen VS Electric Cars"
                text="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <hr />
            <News 
                title="The Downsides of AI Artistry"
                text="What are the possible adverse effects of on-demand AI image generation?"
            />
            <hr />
            <News 
                title="Is VC Funding Drying Up?"
                text="Private funding by VC firms is down 50% YOY. We take a look at what means."
            />
        </div>
    )
}