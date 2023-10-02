import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blades">Blades</Link>
            </nav>
            <Outlet />
        </>
    );
}

export default App;
