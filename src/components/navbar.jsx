import Button1 from "./button"
import CallNo from "./call_no/call_no"
import HamMenu from "./hamMenu"
import Logo from "./logo"
import { Link } from "react-router-dom"
import './styling/navbar.style.css'

const Navbar = () => {
    return (
        <div className="navbar nav-scroll">
            <Link to = '/'><Logo /></Link>
            <div className="menu">

                <div className="menu-items">
                    <ul className="menu-list">

                       <Link className="link" to='/shippers'>
                         <li>Shippers</li>
                        </Link>
                       <Link className="link" to='/carriers'>
                        <li>Carriers</li>
                        </Link>
                       <Link className="link" to='/services'>
                        <li>Services</li>
                        </Link>
                       <Link className="link" to='/track'>
                        <li>Track</li>
                        </Link>
                       <Link className="link" to='/about'>
                        <li>About</li>
                        </Link>
                       <Link className="link" to='/blog'>
                        <li>Blog</li>
                        </Link>
                       <Link className="link" to='/contact'>
                        <li>Contact</li>
                        </Link>
                  
                    </ul>
                </div>
                <HamMenu />
                <Button1 title='Get a Quote' />
                <CallNo />
            </div>
        </div>
    )
}

export default Navbar