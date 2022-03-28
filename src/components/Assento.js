import { useState } from "react";

export default function Assento({id, name, isAvailable}) {

    const [selecionado, setSelecionado] = useState(false);

    if(isAvailable) {
        if(selecionado) {
            return <button id={id} onClick={() => {
                setSelecionado(false);
            }} className="assento selecionado">{name}</button>
        }else {
            return <button id={id} onClick={() => {
                setSelecionado(true);
            }} className="assento disponivel">{name}</button>
        }
    }else {
        return <button id={id} className="assento indisponivel">{name}</button>
    }
}