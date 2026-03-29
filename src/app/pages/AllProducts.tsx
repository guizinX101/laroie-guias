import { products } from '../data/products';
import { ProductCard } from '../components/ProductCart';

export function AllProducts() {
  return (
    <div className="container mx-auto px-4 py-10 pt-[180px]">

      <h1 className="text-3xl md:text-4xl text-center mb-10">
        Todos os Produtos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}