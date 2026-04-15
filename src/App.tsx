import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Brand = lazy(() => import('./pages/Brand'));
const Journey = lazy(() => import('./pages/Journey'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const Store = lazy(() => import('./pages/Store'));
const Cart = lazy(() => import('./pages/Cart'));
const Blog = lazy(() => import('./pages/Blog'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Quote = lazy(() => import('./pages/Quote'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/brand" element={<Brand />} />
            <Route path="/about/journey" element={<Journey />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
