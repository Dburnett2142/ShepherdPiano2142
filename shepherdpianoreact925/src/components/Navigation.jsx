import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/video">Video</Link>
            <Link to="/scheduling">Scheduling</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navigation;