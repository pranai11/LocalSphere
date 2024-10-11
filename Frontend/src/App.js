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
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    // Inject the first script for embeddedChatbotConfig
    const configScript = document.createElement("script");
    configScript.innerHTML = `
        window.embeddedChatbotConfig = {
            chatbotId: "UbB1RUQdYQKzlct-k40hT",
            domain: "www.chatbase.co"
        };
    `;
    document.body.appendChild(configScript);

    // Inject the second script for embedding the chatbot
    const embedScript = document.createElement("script");
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.setAttribute("chatbotId", "UbB1RUQdYQKzlct-k40hT");
    embedScript.setAttribute("domain", "www.chatbase.co");
    embedScript.defer = true;
    document.body.appendChild(embedScript);
    
    // Cleanup script elements when the component is unmounted
    return () => {
        document.body.removeChild(configScript);
        document.body.removeChild(embedScript);
    };
}, []);

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
      <Route path="/Blogs" element={<Contenttext/>} />
      <Route path="/About" element={<Products/>} />
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
