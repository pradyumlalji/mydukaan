
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import HeaderMain from './Components/Header.js/HeaderMain';
import SectionSearch from './Components/SectionSearch/SectionSearch';
import SloganMaker from './Components/SloganMaker/SloganMaker';
import TryProduct from './Components/TryProduct/TryProduct';
;


function App() {
  return (
    <div className="App">
    <HeaderMain/>
    <Banner/>
    <SloganMaker/>
    <SectionSearch/>
    <TryProduct/>
    <Footer/>
 
   
    
    
    </div>
  );
}

export default App;
