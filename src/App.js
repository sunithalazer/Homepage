import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Partner from './components/Partner';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Products/>
      <Partner/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
