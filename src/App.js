import logo from './logo.svg';
import './App.css';
import LoginButton from './componets/Nav-bar';
import LogoutButton from './componets/Logout';
import Profile from './componets/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <center>
        <Profile />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </center>
      {/* </header> */}
    </div>
  );
}

export default App;
