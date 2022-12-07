import './App.css';
import Home from './component/Home/home';
import Programs from './component/Programs/programs';
import Reasons from './component/Reasons/reasons';
import Plans from './component/Plans/plans';
import Testimonials from './component/Testimonials/testimonials';
import Join from './component/Join/join';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Home/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testimonials/>
    <Join/> 
    <Footer/>
    </div>
  );
}

export default App;
