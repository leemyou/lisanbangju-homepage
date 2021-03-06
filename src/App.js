import React from 'react'
import './App.css';
import Page from './pages/Page';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Page/>
                <Footer/>

            </BrowserRouter>

      </div>
    );
}

export default App;
