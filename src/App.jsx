import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './components/Highlights';
import Model from './Components/Model';


export default function App() {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}
