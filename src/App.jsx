import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './components/Highlights';
import Model from './Components/Model';
import * as  Sentry from "@sentry/react";
import Features from './Components/Features';
import Core from './Components/Core';
import Footer from './Components/Footer';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Core />
      <Footer />
    </main>
  )
}
 export default Sentry.withProfiler(App);