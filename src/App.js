import './App.css';
import ButtonGrid from './components/ButtonGrid';
import data from './data';

export default function App() {
  return (
    <div className="App">
      {data.map((counter) => {
        return <ButtonGrid key={counter.id} />;
      })}
    </div>
  );
}
