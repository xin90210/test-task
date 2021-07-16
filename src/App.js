import './App.css';
import FilterPanel from './components/filter-panel';
import NewProductForm from './components/new-product-form';
import ProductGrid from './components/product-grid';
import data from './assets/products.json'
import { useState } from 'react';

function App() {

  const prices = data.products.map(product => product.price)

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)




  const [products, setProducts] = useState(data.products)
  const [sorting, setSorting] = useState(`price_ascending`)
  const [priceFilter, setPriceFilter] = useState({ min: minPrice, max: maxPrice })
  const [currency, setCurrency] = useState({ name: 'UAH', multiplier: 1 })

  const addProduct = product => setProducts([...products, { id: Math.max(...products.map(product => product.id)) + 1, ...product }])

  const productsToShow = products.map(product => ({ ...product, price: product.price * currency.multiplier, currency: currency.name }))

  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
          <FilterPanel {...{ sorting, setSorting, priceFilter, setPriceFilter, setCurrency, currency }} />
          <ProductGrid products={productsToShow}
            sorting={sorting} priceFilter={priceFilter} />
        </div>
        <NewProductForm addProduct={addProduct} />
      </div>
    </section>
  );
}


export default App;
