import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/Banner'
import Models from './component/Models';
import NavBar from './component/NavBar'
import Cart from './component/Cart';

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
      <NavBar />
      <Banner />

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
          <Cart carts = {carts}/>
        </div>
        
      </div>
    </>
  )
}

export default App;