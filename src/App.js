import NavBar from './components/NavBar';
import './App.css';
import Filmovi from './components/Filmovi';
import Rezervacije from './components/Rezervacije';
import Slike from './components/Slike';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react';
import slika1 from './slike/slika1.jpg';
import slika2 from './slike/slika2.jpg';
import slika3 from './slike/slika3.jpg';
import slika4 from './slike/slika4.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function App() {
  const notify=()=>{
    toast('Nas bioskop se nalazi u bulevaru Zorana Djindjica broj 100');
}
  const [brRez, setbrRez] = useState(0);
  const [iznos, setIznos] = useState(0);
  const [nekiFilmovi, setNekiFilmovi] = useState([
    {
      id: 1,
      title: "Gospodar prstenova",
      description:
        "Gospodar prstenova je roman epske fantastike koji je napisao engleski akademik i filolog Džon Ronald Rejel Tolkin",
        price: 100,
        amount: 0,
        money:0,
        
        img:  <img className='card-img-top'src={slika1} />
    },
    {
      id: 2,
      title: "Paklene ulice",
      description:
        "Paklene ulice američka je franšiza koja uključuje niz akcionih filmova o ilegalnim uličnim auto-trkama i pljačkama kojima se bave glavni likovi.",
        price: 200,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika2} />
    },
    {
      id: 3,
      title: "Kum",
      description:
        "Kum je američki dramski film režisera Fransisa Forda Kopole iz 1972. godine s Marlonom Brandom, Alom Pačinom, Džejmsom Kanom, Robertom Duvalom i Dajanom Kiton.",
        price: 300,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika3} />
    },
    {
      id: 4,
      title: "Spajdermen",
      description:
        "Spajdermen je američki film iz 2002. godine zasnovan na Marvelovom strip junaku Spajdermenu.",
        price: 300,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika4} />
    },
   
  ]);
  const [filmovi,setFilmovi] = useState([
    {
      id: 1,
      title: "Gospodar prstenova",
      description:
        "Gospodar prstenova je roman epske fantastike koji je napisao engleski akademik i filolog Džon Ronald Rejel Tolkin",
        price: 100,
        amount: 0,
        money:0,
        
        img:  <img className='card-img-top'src={slika1} />
    },
    {
      id: 2,
      title: "Paklene ulice",
      description:
        "Paklene ulice američka je franšiza koja uključuje niz akcionih filmova o ilegalnim uličnim auto-trkama i pljačkama kojima se bave glavni likovi.",
        price: 200,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika2} />
    },
    {
      id: 3,
      title: "Kum",
      description:
        "Kum je američki dramski film režisera Fransisa Forda Kopole iz 1972. godine s Marlonom Brandom, Alom Pačinom, Džejmsom Kanom, Robertom Duvalom i Dajanom Kiton.",
        price: 300,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika3} />
    },
    {
      id: 4,
      title: "Spajdermen",
      description:
        "Spajdermen je američki film iz 2002. godine zasnovan na Marvelovom strip junaku Spajdermenu.",
        price: 300,
        amount: 0,
        money:0,
        img:  <img className='card-img-top'src={slika4} />
    },
   
  ]);
  function refreshFilm(){
    let newFilmovi=filmovi.filter((fil)=>fil.amount>0);
    
    
    setNekiFilmovi(newFilmovi);
    
    
  }
  function addFilm(title,price,id){
    setbrRez(brRez+1);
    setIznos(iznos+price);
    filmovi.forEach((fil)=>{
      if(fil.id===id){
        fil.amount++;
        fil.money=fil.money+fil.price;
      }
      });
      refreshFilm();
  }
  function deleteFilm(title,price,id){
    if(brRez>0)
    setbrRez(brRez-1);
    if(iznos>0)
    setIznos(iznos-price);
    filmovi.forEach((fil)=>{
      if(fil.id===id){
        fil.amount--;
        fil.money=fil.money-fil.price;
      }
      });
  }
  return(
    <BrowserRouter className="App">
        <NavBar brRez={brRez} iznos={iznos}>
        
        </NavBar>
    <Routes>
      <Route path="/" element={<Filmovi filmovi={filmovi} rezervisi={addFilm} otkazi={deleteFilm}/>} />
      <Route path="/rezervacije" element={<Rezervacije filmovi={nekiFilmovi}/>} />
      <Route path="/slike" element={<Slike />}/>
    </Routes>
    <button className='dugme' onClick={notify}>Adresa</button>
    </BrowserRouter>

  );
    
  
}

export default App;
