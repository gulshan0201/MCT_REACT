import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (

    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Body theme={theme} />
    </div>

  );
}

export default App;
