import './App.css';
import AuthenticatedApp from './app/AuthenticatedApp';
import UnAuthenticatedApp from './app/UnAuthenticatedApp';

function App() {
  const tokenInLocalsStorage = localStorage.getItem('11#221#');

  console.log('hhhhh', tokenInLocalsStorage);

  if (tokenInLocalsStorage) {
    return <AuthenticatedApp />;
  } else {
    return <UnAuthenticatedApp />;
  }
}

export default App;
