import './App.css';
import { UserContextProvider } from './context/user';
import { Home } from './pages';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
