import { useState } from 'react';
import './App.css';
import AuthenticatedApp from './app/AuthenticatedApp';
import UnAuthenticatedApp from './app/UnAuthenticatedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) return <AuthenticatedApp />;
  return <UnAuthenticatedApp />;
}

export default App;
