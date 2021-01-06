import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/menu/" component={Menu} />
      </Router>
    </>
  );
}

export default App;
