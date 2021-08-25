import Cat from "./Cat";
import Users from "./Users";
import Swapi from "./Swapi";
import Home from "./Home";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route exact path="/"><Home /></Route>
                <Route path="/cat"><Cat /></Route>
                <Route path="/users"><Users /></Route>
                <Route path="/swapi"><Swapi /></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;