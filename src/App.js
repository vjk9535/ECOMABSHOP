import './App.css';
import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Initial from './Components/Initial';
import Footer from './Components/Footer';
import Mobiles from './Components/Mobiles';
import ItemsMenuBar from './Components/ItemsMenuBar';
function App() {
  return (
    <div>
    <BrowserRouter>   
    <Initial/>
    <Routes>
      <Route path='*' element={
        <>
        <Initial/>
        <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
        </>
      }
      />
      <Route path='/Home/*' element={
        <>
        <Initial/>
        <ItemsMenuBar/>
        <Routes>
        <Route path='/Mobiles' element={<Mobiles/>} />
        </Routes>
        <Footer/>
        </>
      }
      />
    </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App;
