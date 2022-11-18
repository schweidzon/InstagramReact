export default function Posts() {

    // function like(element) {
    //     element.target.classList.contains('liked') ? element.target.classList.remove('liked') : element.target.classList.add('liked')

    // }

    const posts = [
        { usuarioImage: "assets/img/meowed.svg", usuarioName: "meowed", postImage: "assets/img/gato-telefone.svg", likesImage: "assets/img/respondeai.svg", likedUser: "respondeai", likeNumber: 101.523 },
        { usuarioImage: "assets/img/barked.svg", usuarioName: "barked", postImage: "assets/img/dog.svg", likesImage: "assets/img/adorable_animals.svg", likedUser: "adorable_animals<", likeNumber: 99.159 }
    ]

    return (
        <div class="posts">
            {posts.map((p) => <Post post={p}/>)}
        </div>
    )

}

function Post(props) {
    console.log(props)
    return (
        <div class="post" data-test="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.post.usuarioImage} alt="UsuarioImage" />
                            {props.post.usuarioName}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={props.post.postImage} alt="ContentImage" data-test="post-image" />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"  data-test="like-post"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src= {props.post.likesImage} alt="UsuarioImage" />
                            <div class="texto">
                                Curtido por <strong>{props.post.likedUser}</strong> e <strong data-test = "likes-number">outras {props.post.likeNumber} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>

    )
}
