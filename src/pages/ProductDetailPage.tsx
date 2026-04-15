import { useParams, Navigate } from 'react-router-dom';
import { getProductBySlug } from '@/data/products';
import { ProductDetail } from '@/components/products/ProductDetail';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-20">
      <ProductDetail product={product} />
    </div>
  );
}
