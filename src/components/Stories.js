export default function Stories() {
    const stories = [
        {storyImage:"assets/img/9gag.svg", storyUser:"9gag" },
        {storyImage:"assets/img/meowed.svg", storyUser:"meowed" },
        {storyImage:"assets/img/barked.svg", storyUser:"barked" },
        {storyImage:"assets/img/nathanwpylestrangeplanet.svg", storyUser:"nathanwpylestrangeplanet" },
        {storyImage:"assets/img/wawawicomics.svg", storyUser:"wawawicomics" },
        {storyImage:"assets/img/respondeai.svg", storyUser:"respondeai" },
        {storyImage:"assets/img/filomoderna.svg", storyUser:"filomoderna" },
        {storyImage:"assets/img/memeriagourmet.svg", storyUser:"memeriagourmet" }
    ]

    return (
        <div class="stories">
            {stories.map((s) => <Story story={s}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}

function Story(props) {
    return (
        <div class="story">
        <div class="imagem">
            <img src={props.story.storyImage} alt="UsuarioImage" />
        </div>
        <div class="usuario">
            {props.story.storyUser}
        </div>
    </div>
    )
}