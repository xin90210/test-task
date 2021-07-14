import './App.css';
import cardIcon from './assets/5.jpg'


function App0() {
  return (
    <section>
      <div className="wrapper">
        <div className="inner_wrapper">
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
          <div className="products">
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
            <div className="card">
              <img src={cardIcon} className="card_icon" />
              <div className="wrapper_card">
                <h3>name</h3>
                <h3>price</h3>
                <p>description of product</p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
}


export default App0;
