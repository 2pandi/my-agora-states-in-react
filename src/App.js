import './App.css';
import { Discussions } from './components/Discussions';
import { Form } from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [discussions, setDiscussions] = useState([]);
  let newDiscussion = {};

  const handleSubmit = (author, title) => {
    let createdAt = new Date().toLocaleString();
    let avatarUrl = 'https://p.kindpng.com/picc/s/33-338711_circle-user-icon-blue-hd-png-download.png';
    newDiscussion = {author, title, createdAt, avatarUrl};
    setDiscussions([newDiscussion, ...discussions]);
  };

  useEffect(() => {
    fetch('http://localhost:4000/discussions/')
    .then(res => res.json())
    .then(data => {
      setDiscussions(data);
    })
  }, []);

  return (
    <div className="App">
      <h1>My Agora States</h1>
      <Form handleSubmit={handleSubmit} discussions={discussions} setDiscussions={setDiscussions}/>
      <Discussions discussions={discussions}/>
    </div>
  );
}

export default App;
