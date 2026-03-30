
import { Suspense } from 'react';
import './App.css'
import Banner from './component/Banner'
import Models from './component/Models';
import NavBar from './component/NavBar'

const getModels = async () => {
  const res = await fetch('/models.json');
  return res.json();
}



function App() {
  const modelPromise = getModels();

  return (
    <>
      <NavBar/>

      <Banner/>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Models modelPromise={modelPromise}/>
    </Suspense>
      
    </>
  )
}

export default App
