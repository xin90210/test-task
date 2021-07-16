import ProductCard from './product-card'


const sortFunctions = {
    price_ascending(a, b) {
        return a.price - b.price
    },

    price_descending(a, b) {
        return b.price - a.price
    },

    alphabetical(a, b) {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    }
}

function ProductGrid({ products, sorting, priceFilter: { min, max } }) {
    return (
        <div className="products">
            {products.filter(product => product.price >= min && product.price <= max).sort(sortFunctions[sorting]).map(ProductCard)}
        </div>
    )
}

export default ProductGrid