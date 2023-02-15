import pf from './pictures/BwResized.jpg'
import Navbar from "./components/Navbar";

const App = () => (
  <div>
    <Navbar/>
    <h1 className="text-6xl text-platinum pt-3 pb-3">About me</h1>
    <img src={pf} alt='pf' className="rounded-full w-80 h-80"></img>
  </div>
);
export default App;
