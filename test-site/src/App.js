import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page Under Construction
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            Learn React
          </Button>
          
        </a>
      </header>
    </div>
    
  );
}

export default App;
