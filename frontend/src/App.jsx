import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Customer Pages
import HomePage from './pages/customer/HomePage';
import MenuPage from './pages/customer/MenuPage';
import AboutPage from './pages/customer/AboutPage';
import ContactPage from './pages/customer/ContactPage';
import CartPage from './pages/customer/CartPage';
import CheckoutPage from './pages/customer/CheckoutPage';
import PlayNowPage from './pages/customer/PlayNowPage';
import ProfilePage from './pages/customer/ProfilePage';
import OrderTracking from './pages/customer/OrderTracking';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMenuManagement from './pages/admin/AdminMenuManagement';
import AdminOrders from './pages/admin/AdminOrders';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminCrowdMeter from './pages/admin/AdminCrowdMeter';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/play" element={<PlayNowPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrderTracking />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<AdminMenuManagement />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/crowdmeter" element={<AdminCrowdMeter />} />
      </Routes>
    </Router>
  );
}
