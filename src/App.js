import './App.css';
import Wedding from './Wedding';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "Spartak & Nare's Wedding Invitation"
  })

  return (
    <div className="App">
      <Wedding />
    </div>
  );
}

export default App;



