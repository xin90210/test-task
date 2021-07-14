import ProductCard from './product-card'


function ProductGrid({products}) {
    return (
        <div className="products">
            {products.map(ProductCard)}
        </div>
    )
}

export default ProductGrid