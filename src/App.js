import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Logout from "./components/pages/Logout";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/register'>
                    <Register/>
                </Route>
                <Route exact path='/logout'>
                    <Logout/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
