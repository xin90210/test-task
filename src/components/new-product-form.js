import { createRef, useState } from 'react';
import ProductCard from './product-card';

function NewProductForm({ addProduct }) {

    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newProduct.name.length > 0 && +newProduct.price > 0 && newProduct.description.length > 0) {
            addProduct(newProduct)
            setNewProduct({ name: '', price: '', description: '', image: '' })
        }
    }

    const fileInput = createRef()

    return (
        <div className="add_product">
            <form onSubmit={handleSubmit}>
                <div className="form_left_add_product">
                    <div>
                        <label htmlFor="name_add_product">Имя</label>
                        <input id="name_add_product" type="text" placeholder="Name" value={newProduct.name}
                            onChange={event => setNewProduct({ ...newProduct, name: event.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="price_add_product">Цена</label>
                        <input id="price_add_product" type="number" placeholder="1000" value={newProduct.price}
                            onChange={event => setNewProduct({ ...newProduct, price: event.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="add_product_button">Изображение</label>
                        <button id="add_product_button" value={newProduct.image} type="button"
                            onClick={() => fileInput.current.click()}
                        >
                            +
                        </button>
                        <input ref={fileInput} type="file" hidden
                            onChange={event => setNewProduct({ ...newProduct, image: event.target.value })} />
                    </div>
                </div>

                <div className="form_right_add_product">
                    <textarea type="text" id="description_add_product" placeholder="Description" value={newProduct.description}
                        onChange={event => setNewProduct({ ...newProduct, description: event.target.value })}></textarea>
                    <button type="submit" value="Submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewProductForm