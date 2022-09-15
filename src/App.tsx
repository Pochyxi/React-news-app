import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyMain from './components/MyMain';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import SingleArticle from './components/SingleArticle';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/detail/:articleId" element={<SingleArticle />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>


  );
}

export default App;
