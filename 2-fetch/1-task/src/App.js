import Card from './components/Card';

import './styles/app.scss';

import data from './data';

function App() {
  return (
    <main className="main container">
      {data.map(({ id, image, title, description }) => (
        <Card
          image={image}
          title={title}
          description={description}
          key={id}
        />
      ))}
    </main>
  );
}

export default App;
