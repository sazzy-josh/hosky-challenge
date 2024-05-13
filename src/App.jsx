import {
  AboutUs,
  Footer,
  Navbar,
  Services,
  SlideShow,
  Topbar,
} from "./components";

function App() {
  return (
    <main className='overflow-x-hidden'>
      <Topbar />
      <Navbar />
      <Services />
      <AboutUs />
      <SlideShow />
      <Footer />
    </main>
  );
}

export default App;
