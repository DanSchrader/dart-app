import './CounterButton.css';

export default function CounterButton({ number }) {
  return (
    <div className="CounterButton">
      <button className="Single">{number}</button>
      <button className="Double">x2</button>
      <button className="Triple">x3</button>
    </div>
  );
}
