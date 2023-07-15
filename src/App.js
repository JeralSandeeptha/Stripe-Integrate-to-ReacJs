import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OneTimePayment from './pages/OneTimePayment';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/onetimepayment' element={<OneTimePayment/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
