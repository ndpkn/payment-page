import './subheader.scss'

const Subheader = () => {
    return (
        <div className='subheader'>
            <div className="subheader__balance">
                <p><span>Balance: </span>$169.90</p>
            </div>
            <div className="subheader__buttons">
                <button className='active'>Card</button>
                <button>PayPal</button>
                <button>Scrill</button>
            </div>
        </div>
    )
}

export default Subheader