import React from "react"
import { ItemContainer } from "./styles"
const Item = ({repo, onClick}) => {

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} className="ver" target="_blank">Ver repositório</a>
            <br/>
            <button id={repo.id} className="remove" onClick={onClick}>Remover</button>
            <hr></hr>
        </ItemContainer>
    )
}

export {Item}