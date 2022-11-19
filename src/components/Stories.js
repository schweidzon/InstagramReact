export default function Stories() {
    const stories = [
        { storyImage: "assets/img/9gag.svg", storyUser: "9gag" },
        { storyImage: "assets/img/meowed.svg", storyUser: "meowed" },
        { storyImage: "assets/img/barked.svg", storyUser: "barked" },
        { storyImage: "assets/img/nathanwpylestrangeplanet.svg", storyUser: "nathanwpylestrangeplanet" },
        { storyImage: "assets/img/wawawicomics.svg", storyUser: "wawawicomics" },
        { storyImage: "assets/img/respondeai.svg", storyUser: "respondeai" },
        { storyImage: "assets/img/filomoderna.svg", storyUser: "filomoderna" },
        { storyImage: "assets/img/memeriagourmet.svg", storyUser: "memeriagourmet" }
    ]

    return (
        <div className="stories">
            {stories.map((s) => <Story key={s.storyImage} story={s} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.story.storyImage} alt="UsuarioImage" />
            </div>
            <div className="usuario">
                {props.story.storyUser}
            </div>
        </div>
    )
}