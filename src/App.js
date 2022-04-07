import './App.css';
import AuthenticatedApp from './app/AuthenticatedApp';
import UnAuthenticatedApp from './app/UnAuthenticatedApp';

function App() {
  const tokenInStorage = sessionStorage.getItem('11#221#');

  console.log('hhhhh', tokenInStorage);

  if (tokenInStorage) {
    return <AuthenticatedApp />;
  } else {
    return <UnAuthenticatedApp />;
  }
}

export default App;
