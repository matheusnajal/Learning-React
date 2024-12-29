const Challenge = () => {

    const numbers = {
        num1: 5,
        num2: 10,
    }

    const sum = (x, y) => {
        x = numbers.num1
        y = numbers.num2
        console.log(x + y)
    }

    return (
        <div>
            <div>
                <p>{numbers.num1}</p>
                <p>{numbers.num2}</p>
            </div>
            <div>
                <button onClick={sum}>Soma dos valores</button>
            </div>
        </div>
    )
}

export default Challengez