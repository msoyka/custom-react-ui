import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  return (
    <div>
      <h1>Component Library</h1>
      <p>Use `$ npm run styleguide` to view component library documentation.</p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
