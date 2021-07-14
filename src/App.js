import './App.css';
import FilterPanel from './components/filter-panel';
import NewProductForm from './components/new-product-form';
import ProductGrid from './components/product-grid';


function App() {
  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
          <FilterPanel />
          <ProductGrid />
        </div>
        <NewProductForm />
      </div>
    </section>
  );
}


export default App;
