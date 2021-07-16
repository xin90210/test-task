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
  console.log(priceFilter)



  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
          <FilterPanel sorting={sorting} setSorting={setSorting} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
          <ProductGrid products={products} sorting={sorting} priceFilter={priceFilter} />
        </div>
        <NewProductForm />
      </div>
    </section>
  );
}


export default App;
