import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <a href="#" className='logo'>Your logo</a>
            <nav className='nav'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/cat" className="nav-link">Cats</Link>
                <Link to="/users" className="nav-link">Users</Link>
                <Link to="/swapi" className="nav-link">Swapi</Link>
            </nav>
            
        </header>
    );
};

export default Header;