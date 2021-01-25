import './App.css';
import { UserContextProvider } from './context/user';
import { LoginPage } from './pages';
import { Home } from './pages';
import { Router } from '@reach/router';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Home path="/"/>
          <LoginPage path="/login"/>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
