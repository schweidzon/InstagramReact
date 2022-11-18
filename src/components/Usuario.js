export default function Usuario() {
    return (
        <div class="usuario" data-test="user">
            <img src="assets/img/catanacomics.svg" alt= "userImage" data-test="profile-image" />
            <div class="texto">
                <strong data-test="name">catanacomics</strong>
                <span>
                    Catana
                    <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}