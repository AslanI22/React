import React from 'react';

function App() {
  const isAuth = false;
  if (isAuth == false) {
    return <div>
      <p>вы авторизованы</p>
    </div>;
  }


}

export default App;