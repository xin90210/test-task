function NewProductForm() {
    return (
        <div className="add_product">
            <form>
                <div className="form_left_add_product">
                    <div>
                        <label for="name_add_product">Имя</label>
                        <input id="name_add_product" type="text" placeholder="Name" />
                    </div>
                    <div>
                        <label for="price_add_product">Цена</label>
                        <input id="price_add_product" type="number" placeholder="1000" />
                    </div>
                    <div>
                        <label for="add_product_button">Изображение</label>
                        <button id="add_product_button">+</button>
                    </div>
                </div>

                <div className="form_right_add_product">
                    <textarea type="text" id="description_add_product" placeholder="Description" ></textarea>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewProductForm