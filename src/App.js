import './App.css';
import { UserContextProvider } from './context/user';
//import { LoginPage } from './pages';
import { Home } from './pages';
import { Router } from '@reach/router';
import { Book1LoginPage } from './pages';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Home path="/"/>
          <Book1LoginPage path="/book1"/>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
