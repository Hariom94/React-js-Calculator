import { useState } from 'react';
import './App.css';

function App() {

  const [value, setVlaue] = useState('');

  return (
    <div className="App">
      <div className="calcualtor">
        <div className="input">
          <input type="text" className='inputtag' value={value} />
        </div>
        <div className="buttons">
          <div className='c'>
            <input type="button" className='btn' value="AC" onClick={e => (setVlaue(""))} />
            <input type="button" className='btn' value="DE" onClick={e => (setVlaue(value.slice(0, -1)))} />
            <input type="button" className='btn' value="." onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="/" onClick={e => (setVlaue(value + e.target.value))} />
          </div>
          <div className='c'>
            <input type="button" className='btn' value="7" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="8" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="9" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="*" onClick={e => (setVlaue(value + e.target.value))} />
          </div>
          <div className='c'>
            <input type="button" className='btn' value="4" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="5" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="6" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="+" onClick={e => (setVlaue(value + e.target.value))} />
          </div>
          <div className='c'>
            <input type="button" className='btn' value="1" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="2" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="3" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="-" onClick={e => (setVlaue(value + e.target.value))} />
          </div>
          <div className='c'>
            <input type="button" className='btn' value="00" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="10" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="0" onClick={e => (setVlaue(value + e.target.value))} />
            <input type="button" className='btn' value="=" onClick={e => (setVlaue(eval(value)))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
