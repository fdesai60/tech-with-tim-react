import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1>Movie App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/faves">Favourites</Link>
            </nav>
        </header>
   );
}
 
export default Header;