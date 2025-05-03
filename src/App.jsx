import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './Components/Highlights';
import Model from './components/Model';
import * as  Sentry from "@sentry/react";
import Features from './components/Features';
import Core from './components/Core';
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