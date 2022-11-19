import { useState } from "react"

export default function Posts() {
    const posts = [
        { usuarioImage: "assets/img/meowed.svg", usuarioName: "meowed", postImage: "assets/img/gato-telefone.svg", likesImage: "assets/img/respondeai.svg", likedUser: "respondeai", likeNumber: 101.523 },
        { usuarioImage: "assets/img/barked.svg", usuarioName: "barked", postImage: "assets/img/dog.svg", likesImage: "assets/img/adorable_animals.svg", likedUser: "adorable_animals", likeNumber: 99.159 }
    ]

    return (
        <div className="posts">
            {posts.map((p) => <Post key={p.usuarioName} post={p} />)}
        </div>
    )

}

function Post(props) {

    const [like, setLike] = useState("heart-outline")
    const [likesNumer, setLikesNumber] = useState(props.post.likeNumber)
    const [iconColor, setIconColor] = useState("notLiked")
    const [saveIcon, setSaveIcon] = useState("bookmark-outline")

    function liked() {
        if(like === "heart-outline") {
            setLike('heart')
            setIconColor('liked')
            setLikesNumber(Number((props.post.likeNumber)+ 0.001).toFixed(3))
        } else {
            setLike('heart-outline')
            setIconColor('notLiked')
            setLikesNumber(props.post.likeNumber)

        }
    }

    function likeImage() {
        setLike('heart')
         setIconColor('liked')
         setLikesNumber(Number((props.post.likeNumber)+ 0.001).toFixed(3))

    }


    function savePost() {
        if(saveIcon === "bookmark-outline") {
            setSaveIcon("bookmark")
        } else {
            setSaveIcon("bookmark-outline")
        }
    }
    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.post.usuarioImage} alt="UsuarioImage" />
                    {props.post.usuarioName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.post.postImage} onClick={likeImage} alt="ContentImage" data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon class={iconColor} onClick={liked} name={like} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={saveIcon} onClick={savePost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.post.likesImage} alt="UsuarioImage" />
                    <div className="texto">
                        Curtido por <strong>{props.post.likedUser}</strong> e <strong data-test="likes-number">outras {likesNumer} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
