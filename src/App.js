import './App.css';
import Discussions from './components/Discussions';
import Form from './components/Form';

function App() {
  let discussionData = () => {
    return fetch(`http://localhost:4000/discussions/`)
    .then(res => res.json())
  }
  return (
    <div className="App">
      <Form discussionData={discussionData} />
      <Discussions discussionData={discussionData} />
    </div>
  );
}

export default App;
