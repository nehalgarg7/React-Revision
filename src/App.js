import './App.css';
import Counter from './component/Counter';
import List from './component/List';

function App() {
  console.log('Hello! I am App.js');
  return (
    <>
    <Counter ></Counter>
    <List items = {['Hi', 'Hello']}></List>
    </>
  );
}

export default App;
