function FilterPanel() {
    return (
        <div className="filter">
            <div className="price">
                <h2>Цена</h2>
                <div className="price_section">
                    <div className="wrapper_price">
                        <label>от:</label>
                        <input type="number" min="1199" max="29999" value="1199" />
                    </div>
                    <div className="wrapper_price">
                        <label>до:</label>
                        <input type="number" min="1199" max="29999" value="29999" />
                    </div>
                </div>
            </div>
            <div className="currency">
                <h2>Валюта</h2>
                <div className="wrapper_currency">
                    <button>USD</button>
                    <button>UAH</button>
                </div>

            </div>
            <div className="sort">
                <h2>Сортировка</h2>
                <div>
                    <input type="radio" id="sort_up" name="sort" value="sort_up" />
                    <label for="sort_up">по возрастанию цены</label>
                </div>
                <div>
                    <input type="radio" id="sort_down" name="sort" value="sort_down" />
                    <label for="sort_down">по убыванию цены</label>
                </div>
                <div>
                    <input type="radio" id="sort_alphabet" name="sort" value="sort_alphabet" />
                    <label for="sort_alphabet">по алфавиту</label>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel