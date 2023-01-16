import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>

      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {
            //map funtion to convert product to a jsx file
            data.products.map((product) => (
              <div key={product.slug} className="product">
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}></img>
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
