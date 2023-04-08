 import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <> 
 
<Navbar title="TextUtils"  aboutText="About Utils"/>
<div className='container'>
<TextForm heading="Enter the text to Analyze below"/>
<About/>
</div>

 
    </>

  );
}

export default App;
