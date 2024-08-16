import Homepage from './Homepage';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Indiitem from './Indiitem';
import Contenttext from './Contenttext'
import Products from './Products';
import Blog from './Blog';
import Post from './Post';
import Contactus from './Contactus';
import Body3 from './Body3';
function App() {
  return (
    <div>
      
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/Footer" element={<Footer/>} />
      <Route path="/Indiitem" element={<Indiitem/>}/>
      <Route path="/Contenttext" element={<Contenttext/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Post" element={<Post/>} />
      <Route path="/Contactus" element={<Contactus/>} />
      <Route path="/Body3" element={<Body3/>} />
      </Routes>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
