import './App.css';
import FilterPanel from './components/filter-panel';
import NewProductForm from './components/new-product-form';
import ProductGrid from './components/product-grid';
import initialProducts from './assets/products.json'
import { useState } from 'react';

function App() {

  const [state, setState] = useState(initialProducts)

  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
          <FilterPanel />
          <ProductGrid products={state.products}/>
        </div>
        <NewProductForm />
      </div>
    </section>
  );
}


export default App;
