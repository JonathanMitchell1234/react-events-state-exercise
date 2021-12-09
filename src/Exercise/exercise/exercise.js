
import { useState } from 'react';

/
function Exercise() {
  
  const [num, setNum] = useState(1);

  
  const addNum = () => setNum(num + 1);

 
  return (
    <section>
      {/* 1e */}
      <button onClick={() => alert("Congrats! You have clicked the button.")}>CLICK HERE</button>
      {/* 2b & 2e */}
      <button onClick={addNum}>STATE</button>
      {/* 2f */}
      <h1>{num}</h1>
    </section>
  );
}


export default Exercise;