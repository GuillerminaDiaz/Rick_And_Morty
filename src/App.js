import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const URL_BASE= 'https://be-a-rym.up.railway.app/api/character';
const API_KEY= '01c32bd903d2.7111a52bfa816b6df674';

function App() {
   const [characters, setCharacters] = useState([]);
   
   const [access, setAccess]= useState(false);
   const EMAIL= 'guillerminaadiaz@gmail.com';
   const PASSWORD = 'password1'

   const location = useLocation();
   const navigate= useNavigate();

   const onSearch =(id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose=(id) =>{

      const charactersFilter= characters.filter(character => character.id !==id)
      setCharacters(charactersFilter)
   }


   const login=(userData) =>{
      if(userData.email === EMAIL && userData.password=== PASSWORD) {
         setAccess(true)
         navigate('/home')
      }
   }

   const logout=() =>{
      setAccess(false)
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {
         location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>
         }   
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
