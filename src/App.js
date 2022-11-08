import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useRouter from './useRouter';
import store from './store';
import { Provider } from 'react-redux';
import TodoList  from './todolist';
function App() {
  const [num, setNum] = useState(0);
  const path = useRouter();
  console.log(num, path);
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React123
          </a>
        </header>
        <button onClick={() => setNum(num => num + 1)} >改变</button>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
