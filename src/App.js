import './App.css';
import CounterButton from './components/CounterButton';
import data from './data/data.js';

export default function App() {
  return (
    <div className="App">
      <section className="ButtonList">
        <CounterButton number={1} />
        <CounterButton number={2} />
        <CounterButton number={3} />
        <CounterButton number={4} />
        <CounterButton number={5} />
        <CounterButton number={6} />
        <CounterButton number={7} />
        <CounterButton number={8} />
        <CounterButton number={9} />
        <CounterButton number={10} />
        <CounterButton number={11} />
        <CounterButton number={12} />
        <CounterButton number={13} />
        <CounterButton number={14} />
        <CounterButton number={15} />
        <CounterButton number={16} />
        <CounterButton number={17} />
        <CounterButton number={18} />
        <CounterButton number={19} />
        <CounterButton number={20} />
      </section>
    </div>
  );
}
