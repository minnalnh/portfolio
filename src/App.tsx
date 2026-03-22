import Header from './components/Header';
import About from './components/About';
import Thesis from './components/Thesis';
import bgImage from './assets/images/background.png';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})`}}>
      <Header />
      <About />
      <Thesis />
    </div>
  )
}

export default App;