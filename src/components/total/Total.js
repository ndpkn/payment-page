import './total.scss'

const Total = () => {
    return (
        <div className="total container">
            <div className="total__left">
                <div className="total__price">
                    <p>Total price</p>
                    <span>$ 192.50</span>
                </div>
                <span>/</span>
                <div className="total__discount">
                    <p>You saving on discount</p>
                    <span>$ 42.50</span>
                </div>
            </div>
            <div className="total__right">
                <div className="total__right-input">
                    <input type="checkbox" name="" id="save" />
                    <label htmlFor="save">Save card</label>
                </div>                
                <button>Pay</button>
            </div>
        </div>
    )
}

export default Total