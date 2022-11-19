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

    const [like, setLike] = useState("")
    const [likesNumer, setLikesNumber] = useState(props.post.likeNumber)
    console.log(props.post.likeNumber)

    function liked() {
        if (props.post.likeNumber === 101.523) {
            setLike('liked')
            setLikesNumber(101.524)
            if (like === 'liked') {
                setLike("")
                setLikesNumber(101.523)


            } else {
                setLike('liked')
                setLikesNumber(101.524)

            }

        }
        if (props.post.likeNumber === 99.159) {
            setLike('liked')
            Number(setLikesNumber("99.160"))
            if (like === 'liked') {
                setLike("")
                setLikesNumber("99.159")


            } else {
                setLike('liked')
                setLikesNumber("99.160")

            }

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
                <img src={props.post.postImage} alt="ContentImage" data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon className={like} onClick={liked} name="heart-outline" data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
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
