import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/links';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/links' element={<Links/>}/>
            </Routes>
        </BrowserRouter>
    )
}