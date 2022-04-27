import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useDispatch } from 'react-redux';
import { addCount, subCount } from './store/modules/counter/actions';

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <Display/>
        <section>
          <Button onclick={()=> dispatch(subCount(1))}>-</Button>
          <Button onclick={()=> dispatch(addCount(1))}>+</Button>
        </section>
        
      </header>
    </div>
  );
}

export default App;
