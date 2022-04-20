import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Search from "./pages/search/index";
import Trending from "./pages/trending";
import Store from "./store";
import Navbar from "./pages/Navigasi/index";
// import Gif from './pages/home/index';

function App() {
  return (
    // <div className="App">
    //   <Gif />

    // </div>

    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={Search} />

          <Route path="/">
            <h1>Welcome to our homepage</h1>
            <Link to="/search">Search</Link>
            <Link to="/trending">Trending</Link>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
