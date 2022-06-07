import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import List from './pages/List';
import Cart from "./components/Cart"
import Item from './pages/Item'

function App() {


  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Cart/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GetList/:item" element={<List />} />
        <Route path="/GetItem/:id" element={<Item />} />
      </Routes>
     </div> 

    </div>
  );
}

export default App;
