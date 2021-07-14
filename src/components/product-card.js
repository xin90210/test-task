import cardIcon from '../assets/5.jpg'


function ProductCard() {
    return (
        <div className="card">
            <img src={cardIcon} className="card_icon" />
            <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
            </div>
        </div>
    )
}

export default ProductCard