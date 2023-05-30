import TOAlogo from './img/TOAlogo.png'
import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

export default function TopMenu() {
    return (
       <BrowserRouter>
        <div className="menu bg-zinc-100 shadow-xl ">
            <div className="container mx-auto flex flex-row">
                <div className="logo">
                    <img src={TOAlogo} alt="" className=' w-16 m-1' />
                </div>
                <ul className="flex flex-row justify-center align-middle items-center">
                    <li className="py-3 px-6"><NavLink to='/'>Home</NavLink></li>
                    <li className="py-3 px-6"><NavLink to='/product'>Products</NavLink></li>
                    <li className="py-3 px-6"><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div> 
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
       </BrowserRouter>
    )
  }