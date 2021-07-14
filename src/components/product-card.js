


function ProductCard({ id, name, price, image, description }) {
    return (
        <div className="card" key={id}>
            <img alt="#" src={`./images/${image}`} className="card_icon" />
            <div className="wrapper_card">
                <h3>{name}</h3>
                <h3>{price} UAH</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductCard