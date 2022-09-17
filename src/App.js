import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import About from  './component/About.js';
import Contact from './component/Contact.js';
import Project from './component/Project.js';
function App() {
  return (
    <>
    <Header/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
