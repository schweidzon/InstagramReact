// export default function Usuario() {
//     const user = [{ userImage: "assets/img/catanacomics.svg", userName: "catanacomics", name: "Catana" }]
//     return (
//         <div class="usuario" data-test="user">
//             {user.map((u) => <User user = {u}/>)}

import { useState } from "react"

//         </div>
//     )
// }

export default function Usuario(props) {

    const [userImage, setUserImage] = useState(props.userImage)
    const [user, setUser]  = useState(props.name)   

    return (
        <div className="usuario" data-test="user">
            <img src={!userImage ? props.userImage : userImage} onClick={() => setUserImage(prompt('Digite um nome de usuário'))} alt="userImage" data-test="profile-image" />
            <div className="texto">
                <strong data-test="name">{props.userName}</strong>
                <span>
                    {!user ? props.name : user}
                    <ion-icon onClick={() => setUser(prompt("Digite um nome de usuário"))} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>


        </div>
    )
}



// function User(props) {
//     return (
//         <div>
//             <img src={props.user.userImage} alt="userImage" data-test="profile-image" />
//             <div class="texto">
//                 <strong data-test="name">{props.user.userName}</strong>
//                 <span>
//                     {props.user.name}
//                     <ion-icon name="pencil" data-test="edit-name"></ion-icon>
//                 </span>
//             </div>
//         </div>
//     )

// }

