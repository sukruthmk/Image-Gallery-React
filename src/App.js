import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Gallery/>
            </div>
        );
    }
}

export default App;
