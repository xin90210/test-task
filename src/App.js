import './App.css';
import FilterPanel from './components/filter-panel';
import NewProductForm from './components/new-product-form';
import ProductGrid from './components/product-grid';
import data from './assets/products.json'
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState(data.products)
  const [sorting, setSorting] = useState(`price_ascending`)

  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
          <FilterPanel sorting={sorting} setSorting={setSorting}/>
          <ProductGrid products={products} sorting={sorting} />
        </div>
        <NewProductForm />
      </div>
    </section>
  );
}


export default App;
