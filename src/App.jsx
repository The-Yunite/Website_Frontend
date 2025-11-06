import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Events from './components/Events';
import PrintLab from './components/PrintLab';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <Services />
      <Events />
      <PrintLab />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
