import './App.css';
import { Discussions } from './components/Discussions';
import { Form } from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions/')
    .then(res => res.json())
    .then(data => {
      setDiscussions(data);
    })
  }, []);

  return (
    <div className="App">
      <Form />
      <Discussions discussions={discussions}/>
    </div>
  );
}

export default App;
