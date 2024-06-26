import './Header.scss'


const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav className="header__nav">
                    <a className="header__link" href="#">Enlace 1</a>
                    <a className="header__link" href="#">Enlace 2</a>
                    <a className="header__link" href="#">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}

export default Header