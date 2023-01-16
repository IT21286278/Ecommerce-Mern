import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {
          //map funtion to convert product to a jsx file
          data.products.map((product) => (
            <div key={product.slug} className="product">
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default HomeScreen;
