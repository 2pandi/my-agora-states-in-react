import './App.css';
import Discussions from './components/Discussions';
import Form from './components/Form';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>My Agora States</h1>
        <Form />
        <Discussions />
      </div>
    </Provider>
  );
}

export default App;
