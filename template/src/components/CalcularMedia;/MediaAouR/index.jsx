const Status =(props)=>{

    return(
        <>
       {props.media >= 7 ?<p>Parabéns! Você passou!</p> : <p>Sua média não foi o suficiente para você ser aprovado.</p>}
        
        </>
    )
}

export default Status