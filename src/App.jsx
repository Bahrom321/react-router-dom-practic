import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import SinglePage from './pages/SinglePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='container'>
          <Router>
            <Routes>
              <Route path='/' element={<NavBar/>}>
                  <Route index element={<Home/>}/> 
                  {/* index === path="/" */}
                  <Route path='about' element={<About/>}/>
                  <Route path="blog" element={<Blog/>}/>
                  <Route path="blog/:id" element={<SinglePage/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Route>
            </Routes>
          </Router>          
          
    </div>
  );
};

export default App;














