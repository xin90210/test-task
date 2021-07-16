function FilterPanel({ sorting, setSorting, priceFilter: { min, max }, setPriceFilter }) {


    return (
        <div className="filter">
            <div className="price">
                <h2>Цена</h2>
                <div className="price_section">
                    <div className="wrapper_price">
                        <label>от:</label>
                        <input type="number" onChange={event => setPriceFilter({ min: +event.target.value, max })} value={min} />
                    </div>
                    <div className="wrapper_price">
                        <label>до:</label>
                        <input type="number" onChange={event => setPriceFilter({ min, max: +event.target.value })} value={max} />
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
                <div className="radio-buttons">
                    <div>
                        <input type="radio" id="sort_up" name="sort" value="price_ascending" defaultChecked={sorting === 'price_ascending'} onChange={() => setSorting('price_ascending')} />
                        <label htmlFor="sort_up">по возрастанию цены</label>
                    </div>
                    <div>
                        <input type="radio" id="sort_down" name="sort" value="price_descending" defaultChecked={sorting === 'price_descending'} onChange={() => setSorting('price_descending')} />
                        <label htmlFor="sort_down">по убыванию цены</label>
                    </div>
                    <div>
                        <input type="radio" id="sort_alphabet" name="sort" value="alphabetical" defaultChecked={sorting === 'alphabetical'} onChange={() => setSorting('alphabetical')} />
                        <label htmlFor="sort_alphabet">по алфавиту</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel