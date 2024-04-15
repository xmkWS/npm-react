import './Footer.css'
import logo from '/header/full-logo.svg'


export default function Footer(){
    return(
        <div className="container">
            <footer className="footer">
            <div className="nav_logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav_footer">
                <div className="nav_footer_h">
                    Nav
                </div>
                <a href="">Catalog</a>
                <a href="">Sale</a>
                <a href="">Main Page</a>
            </div>
            <div className="nav_footer">
                <div className="nav_footer_h">
                    Help
                </div>
                <a href="">FAQ</a>
                <a href="">Support</a>
            </div>
        </footer>
        </div>
    )
}