import logo from './logo.svg';
import './App.css';
import {  Navigate, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/"  element={ <HomePage/> } />
  
      </Routes>
    </div>
  );
}

export default App;
