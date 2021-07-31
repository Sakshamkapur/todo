import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
