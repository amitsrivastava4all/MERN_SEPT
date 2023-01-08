import logo from './logo.svg';
import './App.css';
import { LifeCycle } from './components/LifeCycle';
import { HookExample } from './components/HookExample';

function App() {
  return (
    <div className="App">
     <LifeCycle count = "100" />
     {/* <HookExample/> */}
    </div>
  );
}

export default App;
