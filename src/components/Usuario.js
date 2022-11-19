import { useState } from "react"



export default function Usuario(props) {

    const [userImage, setUserImage] = useState(props.userImage)
    const [user, setUser]  = useState(props.name)   

    return (
        <div className="usuario" data-test="user">
            <img src={!userImage ? props.userImage : userImage} onClick={() => setUserImage(prompt('Digite um nome de usuário'))} alt="userImage" data-test="profile-image" />
            <div className="texto">
                <strong >{props.userName}</strong>
                <span data-test="name">
                    {!user ? props.name : user}
                    <ion-icon onClick={() => setUser(prompt("Digite um nome de usuário"))} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>


        </div>
    )
}



