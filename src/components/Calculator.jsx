import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (button) => {
    const { value, type } = button;
    if (type === 'function') {
      if (value === 'C') {
        setInput('');
        setResult('');
        console.log('Calculator reset');
      } else if (value === 'CE') {
        setInput(input.slice(0, -1));
        console.log('Last entry cleared');
      }
    } else if (type === 'equal') {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(input);
        setResult(evalResult);
        console.log('Calculation result:', evalResult);
      } catch (error) {
        setResult('Error');
        console.error('Calculation error:', error);
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-xs mx-auto my-10 bg-white p-6 rounded-lg shadow-lg">
      <CalculatorDisplay input={input} result={result} />
      <CalculatorButtons handleClick={handleClick} />
    </div>
  );
}