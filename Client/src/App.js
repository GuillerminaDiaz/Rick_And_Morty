import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login';


// const URL_BASE= 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY= '01c32bd903d2.7111a52bfa816b6df674';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess]= useState(false);
   const location = useLocation();
   const navigate= useNavigate();
   

   const onSearch = async (id) => {
      try {
         const { data }= await  axios(`http://localhost:3001/rickandmorty/character/${id}`)
        
         
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 

      }catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose=(id) =>{

      const charactersFilter= characters.filter(character => character.id !==id)
      setCharacters(charactersFilter)
   }


   const login= async (userData)=> {
      try {
         const { email, password } = userData;
         const { data }= await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');
         
         
      } catch (error) {
         console.log(error.message);
      }
   }

   const logout=() =>{
      setAccess(false)
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

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
            <Route path= '/favorites' element={<Favorites characters={characters}/>}/>
         </Routes>
      </div>
   );
}

export default App;
