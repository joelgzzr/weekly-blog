import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, you are in <strong>{ process.env.REACT_APP_ENVIRONMENT }</strong> environment
        </p>
      </header>
    </div>
  );
}

export default App;
