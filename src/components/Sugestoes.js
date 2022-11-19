export default function Sugestoes() {
    const suggestions = [
        { suggestionImage: "assets/img/bad.vibes.memes.svg", suggestionName: "bad.vibes.memes", suggestionReason: "Segue você" },
        { suggestionImage: "assets/img/chibirdart.svg", suggestionName: "chibirdart", suggestionReason: "Segue você" },
        { suggestionImage: "assets/img/razoesparaacreditar.svg", suggestionName: "razoesparaacreditar", suggestionReason: "Novo no Instagram" },
        { suggestionImage: "assets/img/adorable_animals.svg", suggestionName: "adorable_animals", suggestionReason: "Segue você" },
        { suggestionImage: "assets/img/smallcutecats.svg", suggestionName: "smallcutecats", suggestionReason: "Segue você" }
    ]


    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((s) => <Suggestion key={s.suggestionImage} suggestion={s}/>)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.suggestion.suggestionImage} alt="UsuarioImage" />
                <div className="texto">
                    <div className="nome">{props.suggestion.suggestionName}</div>
                    <div className="razao">{props.suggestion.suggestionReason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>

    )
}