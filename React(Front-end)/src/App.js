import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import All_Products from './pages/All_Products';
import Events from './pages/events';
import Sales from './pages/sales';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Support from './pages/support';
import Signin from './pages/signin';
import Footer from './components/Navbar/Footer';


function App() {
return (
	<Router>
	  <Navbar />
    <Routes>
      <Route path='' exact element={<Home />} />
      <Route path='/All_products' element={<All_Products />} />
      <Route path='/Hot Products' element={<Events />} />
      <Route path='/Sales' element={<Sales />} />
      <Route path='/Team' element={<Teams />} />
      <Route path='/Blogs' element={<Blogs />} />
      <Route path='/Support' element={<Support />} />
      <Route path='/Signin' element={<Signin />} />
    </Routes>
    <Footer />
	</Router>
  
);
}

export default App;
