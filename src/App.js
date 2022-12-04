import './App.css';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';

//context
import { AuthProvider } from './context/AuthContext';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';

function App() {

  const [user, setUser] = useState(undefined)

  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })

  }, [auth])

  if(loadingUser){

    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter value={{user}}>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
