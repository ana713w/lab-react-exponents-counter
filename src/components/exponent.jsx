const Exponent = ({num, exponent}) => {

    let array = `${num}`;

    for (let i = 1; i < exponent; i++) {
        array += ` * ${num}`
    }


    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{num}<sup>{exponent}</sup></p>
            <p className="exponent-result">{array} = <span className="total">{num**exponent}</span></p>
        </div>

    )
} 
export default Exponent;