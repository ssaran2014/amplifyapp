import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <main>
              <header className="App-header">
                <h1>We now have Auth!</h1>
              </header>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
              <img src={logo} className="App-logo" alt="logo" />
            </main>
          </div>
        )}
    </Authenticator>
  );
}

export default App;
