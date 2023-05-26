import './App.css';
import { useState, useEffect } from 'react';
//Librerias
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//Componentes
import Cards from './components/Cards/Cards';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Favorites from './components/Favorites/Favorites';
import Error404 from './components/Error404/Error404';
import Formulario from './components/Form/Formulario';

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const { pathname } = useLocation()
   const navigate = useNavigate()

   const onSearch = (id) => {

      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         const characterExist = characters.find(char => char.id === data.id)

         !characterExist
            ? setCharacters((oldChars) => [...oldChars, data])
            : window.alert('¡El personaje ya se agrego!')
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   const logOut = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Navbar onSearch={onSearch} pathname={pathname} logOut={logOut} />
         <Routes>
            <Route path='/' element={<Formulario login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Deatil />} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;