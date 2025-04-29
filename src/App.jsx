import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './components/Highlights';
import Model from './Components/Model';
import * as  Sentry from "@sentry/react";
import Features from './Components/Features';
import Footer from './Components/Footer';
import Processor from './Components/Processor';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Processor />
      <Footer />
    </main>
  )
}
 export default Sentry.withProfiler(App);