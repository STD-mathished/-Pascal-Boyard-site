import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Production from './pages/Production';
import Abeilles from './pages/Abeilles';
import Evenements from './pages/Evenements';
import Contact from './pages/Contact';
import Footer from './components/footer';
import NotFound from './pages/Not-found';

function App() {
  return (
    <>
      <Header/>

      <main className='pt-10'>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/production" element={< Production />} />
            <Route path="/abeilles" element={<Abeilles />} />
            <Route path="/evenements" element={<Evenements />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>

      <Footer/>
  
  </>
  )
}

export default App
