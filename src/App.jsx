import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/Banner'
import Models from './component/Models';
import NavBar from './component/NavBar'
import Cart from './component/Cart';
import Stats from './component/Stats';
import Steps from './component/Steps';
import Pricing from './component/Pricing';
import Footer from './component/Footer';
import Workflow from './component/Workflow';

const getModels = async () => {
  const res = await fetch('/models.json');
  return res.json();
}

// ✅ CALL ONLY ONCE (outside component)
const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [carts, setCarts] = useState([]);
  

  return (
    <>
      <NavBar carts={carts}/>
      <Banner />
      <Stats />

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Models
          modelPromise={modelPromise}
          activeTab={activeTab}
          setActiveTab={setActiveTab} carts = {carts} setCarts = {setCarts}
        />
      </Suspense>

      {/* Cart */}
      <div className={activeTab === 'cart' ? 'block' : 'hidden'}>
        <div className="max-w-6xl mx-auto w-full pb-20">
          <Cart carts = {carts} setCarts={setCarts}/>
        </div>
        
      </div>

      <Steps/>

      <Pricing />

      <Workflow />

      <Footer />
    </>
  )
}

export default App;