import Header from './Header/Header';
import './App.css';
import Content from './content/content';
import Detail from './Detail/Detail';
import Detail1 from './Detail1/Detail1';
import Carousalpage from './Carousal/Carousal';

function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <Detail/>
     <Detail1/>
     <Carousalpage/>
    </div>
  );
}

export default App;
