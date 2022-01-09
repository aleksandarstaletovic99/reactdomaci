import NavBar from './components/NavBar';
import './App.css';
import Filmovi from './components/Filmovi';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react';
function App() {
  const [cartNum, setCartNum] = useState(0);
  const [filmovi,setFilmovi] = useState([
    {
      id: 1,
      title: "Gospodar prstenova",
      description:
        "Gospodar prstenova je roman epske fantastike koji je napisao engleski akademik i filolog Džon Ronald Rejel Tolkin",
        price: 100,
        amount: 0,
        money:0,
        
        img:0
    },
    {
      id: 2,
      title: "Paklene ulice",
      description:
        "Paklene ulice američka je franšiza koja uključuje niz akcionih filmova o ilegalnim uličnim auto-trkama i pljačkama kojima se bave glavni likovi.",
        price: 200,
        amount: 0,
        money:0,
        img:0 
    },
    {
      id: 3,
      title: "Kum",
      description:
        "Kum je američki dramski film režisera Fransisa Forda Kopole iz 1972. godine s Marlonom Brandom, Alom Pačinom, Džejmsom Kanom, Robertom Duvalom i Dajanom Kiton.",
        price: 300,
        amount: 0,
        money:0,
        img: 0
    },
    {
      id: 4,
      title: "Spajdermen",
      description:
        "Spajdermen je američki film iz 2002. godine zasnovan na Marvelovom strip junaku Spajdermenu.",
        price: 300,
        amount: 0,
        money:0,
        img:  0
    },
   
  ]);
  function addFilm(title,price,id){
    setCartNum(cartNum+1);
    
  }
  function deleteFilm(title,price,id){
    if(cartNum>0)
    setCartNum(cartNum-1);
    
  }
  return(
    <BrowserRouter className="App">
        <NavBar cartNum={cartNum}></NavBar>
    <Routes>
      <Route path="/" element={<Filmovi filmovi={filmovi} rezervisi={addFilm} otkazi={deleteFilm}/>} />
      <Route path="/cart"/>
      <Route path="/slike"/>
    </Routes>
    </BrowserRouter>

  );
    
  
}

export default App;
