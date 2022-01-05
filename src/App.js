import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthRedirect from './pages/Auth/AuthRedirect';
import Login from './pages/Auth/Login';
import SpotifyLogin from "./pages/Auth/SpotifyLogin";
import AuthProvider from './providers/auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
import Mood from './pages/Mood/Mood';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path={'/login'} component={SpotifyLogin} />
            <Route path={'/auth'} component={AuthRedirect} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/create'} component={Create} />
            <Route path={'/mood'} component={Mood} />
            <Route exact path={'/'} component={Login} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
