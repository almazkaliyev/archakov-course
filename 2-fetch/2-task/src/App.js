import React from 'react';

import Card from './components/Card';

import './styles/app.scss';

import data from './data';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <main className="main container">
      <input
        className="input search-input"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />

      <div className="cards">
        {data
          .filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()) 
              || item.description.toLowerCase().includes(inputValue.toLowerCase()))
          .map(({ id, image, title, description }) => (
            <Card
              image={image}
              title={title}
              description={description}
              key={id}
            />
        ))}
      </div>
    </main>
  );
}

export default App;
