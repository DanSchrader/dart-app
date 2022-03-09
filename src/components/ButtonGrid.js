import './ButtonGrid.css';
import SingleButton from './SingleButton';
import DoubleButton from './DoubleButton';
import TripleButton from './TripleButton';

export default function ButtonGrid() {
  return (
    <section className="ButtonGrid">
      <SingleButton />
      <DoubleButton />
      <TripleButton />
    </section>
  );
}
