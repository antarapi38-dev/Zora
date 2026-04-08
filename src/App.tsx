/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import DailyDiscover from './components/DailyDiscover';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans text-gray-800">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <Banner />
        <Categories />
        <DailyDiscover />
      </main>
      <Footer />
    </div>
  );
}

