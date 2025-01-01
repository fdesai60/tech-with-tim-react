import styles from "./Home.module.css"
import Form from "../Form/Form";
import MovieList from "../MovieList/MovieList";
const Home = () => {
    return (
    <div className={styles.home}>
        <Form/>
        <MovieList/>
    </div>
    );
}
 
export default Home;