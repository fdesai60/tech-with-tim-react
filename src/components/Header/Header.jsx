import { Link } from "react-router-dom";
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Movie App</h1>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/faves">Favourites</Link>
            </nav>
        </header>
   );
}
 
export default Header;