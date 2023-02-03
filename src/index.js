import React from 'react';
import ReactDOM ,{createRoot} from 'react-dom/client';
import './index.css';
import { Header } from './Header/header';
import { About } from './About/about';
import { Image } from './About-image/image';
import { Footer } from './Footer/footer';

const root = createRoot(document.getElementById('root'));

function Main(){
  return(
    <div className='container'>
      <Header/>
      <About/>
      <Image/>
      <Footer/>
    </div>
  );
}

root.render(<Main/>)