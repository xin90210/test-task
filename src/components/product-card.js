


function ProductCard({ id, name, price, image, description, currency }) {
    return (
        <div className="card" key={id}>
            <img alt="#" src={`${image}`} className="card_icon" />
            <div className="wrapper_card">
                <h3>{name}</h3>
                <h3>{Math.round(price)} {currency}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductCard