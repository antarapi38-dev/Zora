/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import DailyDiscover from './components/DailyDiscover';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';

function Home() {
  return (
    <main className="container mx-auto px-4 pb-12">
      <Banner />
      <Categories />
      <DailyDiscover />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#f5f5f5] min-h-screen font-sans text-gray-800 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

