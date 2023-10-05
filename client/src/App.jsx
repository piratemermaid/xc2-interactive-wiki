import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Grid } from "@mui/material";

function App() {
    return (
        <>
            <nav>
                <Grid container spacing={2}>
                    <Grid item>
                        <Link to="/signin">Signin</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/">Home</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/blades">Blades</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/my_blades">My Blades</Link>
                    </Grid>
                </Grid>
            </nav>
            <Outlet />
        </>
    );
}

export default App;
