import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout';
import MainPage from './components/MainPage';
import PredictiveAnalysis from './components/PredictiveAnalysis'
import Accuracy from './components/Accuracy'
import Dataset from './components/Dataset'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout/>} >
            <Route index element={<MainPage/>} />
            <Route path='/predictiveAnalysis' element={<PredictiveAnalysis />} />
            <Route path='/accuracy' element={<Accuracy />} />
            <Route path='/dataset' element={<Dataset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
