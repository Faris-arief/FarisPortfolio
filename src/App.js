
import './sass/App.sass';
import Manatee from './components/Manatee';
import Narwhal from './components/Narwhal';
import Whale from './components/Whale/Whale';
import Toolbar from './components/Toolbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Toolbar/>
      <BrowserRouter>
        <nav>
          <ul>
            <li><a href="/manatee">Manatee</a></li>
            <li><a href="/narwhal">Narwhal</a></li>
            <li><a href="/whale">Whale</a></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
          <Switch>
            <Route path="/manatee">
              <Manatee />
            </Route>
            <Route path="/narwhal">
              <Narwhal />
            </Route>
            <Route  path="/whale">
              <Whale />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
