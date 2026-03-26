
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </>
    );
};

export default Home;