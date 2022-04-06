import { useContext } from 'react';
import './App.css';
import AuthenticatedApp from './app/AuthenticatedApp';
import UnAuthenticatedApp from './app/UnAuthenticatedApp';
import { AuthContext } from './context/authContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('isAuthenticated', isAuthenticated);

  // if (isAuthenticated) return <AuthenticatedApp />;
  // return <UnAuthenticatedApp />;

  return <AuthenticatedApp />;
}

export default App;
