import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Coding/components/Header';
import Body from './Coding/Components/Body';


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
