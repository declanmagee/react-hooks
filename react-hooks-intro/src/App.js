import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null});
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("online", handleOnline);
    // window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }


  return (
    <div className="App">
        <h2>Counter</h2>
        <button onClick={incrementCount}>I was click {count} times!!</button>

        <h2>Toggle Light</h2>
        <div 
          style={{
            height: '50px',
            width: '50px',
            background: isOn ? 'yellow' : 'grey'
          }}
          onClick={toggleLight}
        ></div>

        <h2>Mouse Position</h2>
        {JSON.stringify(mousePosition, null, 2)}<br/>

        <p>X Position: </p>
        <p>Y Position: </p>
    </div>
  );
}

export default App;
