import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={MainPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
