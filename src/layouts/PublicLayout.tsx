import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

// Pages
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth pages
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Shop pages
const Store = lazy(() => import('../pages/Store'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

// Product pages
const Products = lazy(() => import('../pages/Products'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));

// Company pages
const About = lazy(() => import('../pages/About'));
const Journey = lazy(() => import('../pages/Journey'));
const Brand = lazy(() => import('../pages/Brand'));

// Content pages
const Blog = lazy(() => import('../pages/Blog'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const Quote = lazy(() => import('../pages/Quote'));

// Admin
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  useAOS();

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/orders" element={<OrderHistory />} />
              </>
            )}

            {/* Shop */}
            {site.features.shop && (
              <>
                <Route path="/store" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </>
            )}

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />

            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/about/journey" element={<Journey />} />
            <Route path="/about/brand" element={<Brand />} />

            {/* Content */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
