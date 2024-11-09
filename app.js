import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './src/pages/HomePage.js';
import LoginPage from './pages/LoginPage';
import ProfilePage from './src/pages/ProfilePage';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    );
}

export default App;
