import logo from '/header/full-logo.svg'
import './Header.css'
import {Link} from 'react-router-dom'
import basket from '/header/basket.svg'


export default function Header(){
    return(
        <div className="container">
            <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className="nav">
                <Link to="/basket">
                    <img src={basket} alt="" />
                </Link>
                <Link to="/catalog" className='header-link'>Catalog</Link>
                <Link to="/" className='header-link'>Sale</Link>
                <Link to="/" className='header-link'>Main Page</Link>
            </nav>
        </header>
        </div>
    )
}