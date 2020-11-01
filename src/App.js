import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import BlogPage from './Components/BlogPage/BlogPage';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blogs">
          <BlogPage/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
