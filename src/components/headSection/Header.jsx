import React from 'react';
import logo from 'C:/Users/user/Desktop/react-one/react-one/src/logo.svg';
import "./Header.css";
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import About from '../aboutPage/About';
import Body from '../bodySection/Body';
import Blog from '../pages/Blog';
import Events from '../pages/Events';
import FAQ from '../pages/FAQ';
import Interest from '../pages/Interest';
import Quote from '../pages/Quotes';


function Header(){
    return(
      <>
        
          <BrowserRouter>
          <div className='header'>
            <img src = {logo} width="40px" alt="Logo" />
            <nav>
              <ul className='nav-items'>
                <li><Link className='text-link' to='/'>Home</Link></li>
                <li><Link className='text-link' to='/about'>About</Link></li>
                <li><Link className='text-link' to='/blog'>Blog</Link></li>
                <li><Link className='text-link' to='/events'>Events</Link></li>
                <li><Link className='text-link' to='/interest'>Interest</Link></li>
                <li><Link className='text-link' to='/faq'>FAQ</Link></li>
                <li><Link className='text-link' to='/quotes'>Quotes</Link></li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/events' element={<Events />} />
            <Route path='/interest' element={<Interest />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/quotes' element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default Header;