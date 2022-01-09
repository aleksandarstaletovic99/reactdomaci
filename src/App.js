import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter className="App">
        <NavBar ></NavBar>
    </BrowserRouter>

  );
    
  
}

export default App;
