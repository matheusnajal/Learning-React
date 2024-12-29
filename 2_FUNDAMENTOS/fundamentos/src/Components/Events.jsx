const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o Evento!")
    }

const renderSomething = (x) => {
    if (x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Também posso renderizar isso!</h1>
    }
}

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique Aqui também!'</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true){
                        console.log("Isso não deveria existir :)")
                    }
                }}>Clica aqui por favor.</button>
            </div>
            {renderSomething(false)}
        </div>
    )
}

export default Events   