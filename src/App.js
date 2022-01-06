import React, {Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/Loader';

import AuthRedirect from './pages/Auth/AuthRedirect';
import Login from './pages/Auth/Login';
import SpotifyLogin from "./pages/Auth/SpotifyLogin";
import AuthProvider from './providers/auth';
// import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
// import Mood from './pages/Mood/Mood';


const Dashboard = lazy(() =>
  import('./pages/Dashboard/Dashboard'),
)

const Mood = lazy(() => 
  import('./pages/Mood/Mood'),
);


function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Loader />}>
            <Route path={'/login'} component={SpotifyLogin} />
            <Route path={'/auth'} component={AuthRedirect} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/create'} component={Create} />
            <Route path={'/mood'} component={Mood} />
            <Route exact path={'/'} component={Login} />
        </Suspense>
      </Router>
</AuthProvider>
  );
}

export default App;
