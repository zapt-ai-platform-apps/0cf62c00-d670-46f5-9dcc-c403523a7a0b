import React from 'react';

export default function CalculatorButtons({ handleClick }) {
  const buttonValues = [
    { value: '(', type: 'operator' },
    { value: ')', type: 'operator' },
    { value: 'C', type: 'function' },
    { value: 'CE', type: 'function' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '/', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '*', type: 'operator' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '0', type: 'number' },
    { value: '.', type: 'number' },
    { value: '=', type: 'equal' },
    { value: '+', type: 'operator' },
  ];

  const getButtonClass = (type) => {
    let classes =
      'font-semibold py-2 rounded cursor-pointer focus:outline-none transform hover:scale-105 transition duration-200';
    if (type === 'number') {
      classes += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
    } else if (type === 'operator') {
      classes += ' bg-blue-500 text-white hover:bg-blue-600';
    } else if (type === 'function') {
      classes += ' bg-red-500 text-white hover:bg-red-600';
    } else if (type === 'equal') {
      classes += ' bg-green-500 text-white hover:bg-green-600 col-span-2';
    }
    return classes;
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttonValues.map((button) => (
        <button
          key={button.value}
          onClick={() => handleClick(button)}
          className={getButtonClass(button.type)}
        >
          {button.value}
        </button>
      ))}
    </div>
  );
}