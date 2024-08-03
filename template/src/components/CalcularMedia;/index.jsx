import { useState } from "react"
import MediaAouR from "./MediaAouR"
import Status from "./MediaAouR"

const CalcularMedia =()=>{
    const [PrimNota, setPrimNota] = useState(0)
    const [SegNota, setSegNota] = useState(0)
    const [TerNota, setTerNota] = useState(0)
    const [media, setMedia] = useState(null)

    const ChangePrimNota = (e) =>{
        setPrimNota(e.target.value)
    }
    const ChangeSegNota = (e) =>{
        setSegNota(e.target.value)
    }
    const ChangeTerNota = (e) =>{
        setTerNota(e.target.value)
    }

    const handleClick = () =>{
        const calculaMedia = (parseFloat(PrimNota) + parseFloat(SegNota) + parseFloat(TerNota)) /3
        setMedia(calculaMedia)
    }

    const zerarTudo = () =>{
        setMedia(null)
    }

    return(
        <>
            <input type="number" placeholder="Informe a primeira nota" onChange={ChangePrimNota}/>
            <input type="number" placeholder="Informe a segunda nota" onChange={ChangeSegNota}/>
            <input type="number" placeholder="Informe a terceira nota" onChange={ChangeTerNota}/>

            <button onClick={handleClick}>Calcular a média</button>
            {media !== null && <p>A média final foi de: {media}</p>}
            <button onClick={zerarTudo}>Zerar Média</button>

            {media !== null && <Status media ={media}/>}
            
        </>
    )
}

export default CalcularMedia