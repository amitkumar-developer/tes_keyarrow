import React from 'react';
import MyComponent from './MyComponent'
function App() {
  const numbers = [ 2, 3, 1, 4, 5];
  return (
    <div>
        <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <MyComponent/>
    </div>
  );
}
export default App;