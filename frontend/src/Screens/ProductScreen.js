import { useParams } from 'react-router-dom';

function ProductScreen() {
  const productSlug = useParams();
  const { slug } = productSlug;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
