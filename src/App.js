import './App.css';
import { UserContextProvider } from './context/user';
//import { LoginPage } from './pages';
import { Home } from './pages';
import { Router } from '@reach/router';
import { Book1LoginPage, Book2LoginPage, Book3LoginPage } from './pages';


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Home path="/"/>
          <Book1LoginPage path="/book1"/>
          <Book2LoginPage path="/book2"/>
          <Book3LoginPage path="/book3"/>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
