import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ListProductos from '../pages/ListProductos';
import RegistroBus from '../pages/RegistroBus';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/listProductos' element={<ListProductos/>}/>
                <Route path='/registroBus' element={<RegistroBus/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;