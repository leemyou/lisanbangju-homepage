import './App.css';
import Page from './pages/Page';
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Page/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
