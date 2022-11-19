// export default function Usuario() {
//     const user = [{ userImage: "assets/img/catanacomics.svg", userName: "catanacomics", name: "Catana" }]
//     return (
//         <div class="usuario" data-test="user">
//             {user.map((u) => <User user = {u}/>)}

//         </div>
//     )
// }

export default function Usuario(props) {

    return (
        <div className="usuario" data-test="user">
            <img src={props.userImage} alt="userImage" data-test="profile-image" />
            <div className="texto">
                <strong data-test="name">{props.userName}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil" data-test="edit-name"></ion-icon>
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

