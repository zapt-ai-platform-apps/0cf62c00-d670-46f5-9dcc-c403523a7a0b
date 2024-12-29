import React from 'react';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      {/* App Header */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-purple-600">Calculator App</h1>
      </header>
      {/* Calculator Component */}
      <Calculator />
      {/* Made on ZAPT Badge */}
      <footer className="mt-8 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}