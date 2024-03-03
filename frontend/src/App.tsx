import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Auth } from './pages/auth';
import { Shop } from './pages/shop';
import { Purchased } from './pages/purchased';
import { Checkout } from './pages/checkout';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Shop />}/>
          <Route path = '/auth' element={<Auth />}/>
          <Route path = '/purchased' element={<Purchased />}/>
          <Route path = '/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
