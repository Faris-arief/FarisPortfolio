
import './sass/App.sass';
import Error from './components/Error';
import Narwhal from './components/Narwhal';
import Whale from './components/Whale/Whale';
import Home from './components/Home';
import Toolbar from './components/Toolbar';
import Projects from './components/ProjectsList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Toolbar/>
      <BrowserRouter>
          <Switch>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/narwhal">
              <Narwhal />
            </Route>
            <Route  path="/whale">
              <Whale />
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/">
              <Error/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
