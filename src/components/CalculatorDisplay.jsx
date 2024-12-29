import React from 'react';

export default function CalculatorDisplay({ input, result }) {
  return (
    <div className="mb-4">
      <div className="text-right text-gray-500">{input || '0'}</div>
      <div className="text-right text-2xl font-bold">{result}</div>
    </div>
  );
}