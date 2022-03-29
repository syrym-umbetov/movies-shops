import React, { useState } from 'react';

const Fibonnaci = () => {
  const [number, setNumber] = useState(null);
  function handleChange(e) {
    setNumber(+e.target.value);
  }

  return (
    <div className='container'>
      <div>
        <input type='number' onChange={handleChange} />
      </div>
      <div> {fibonacci(number)}</div>
    </div>
  );
};
export function fibonacci(num) {
  if (!num || num < 1) {
    return 'must be higher than 0';
  }
  const arr = [];
  let pastNumber = 0;
  let currentNumber = 1;
  for (let i = 1; i <= num; i++) {
    const nextNumber = currentNumber + pastNumber;
    arr.push(currentNumber);
    pastNumber = currentNumber;
    currentNumber = nextNumber;
  }
  return arr.join(', ');
}

export default Fibonnaci;
