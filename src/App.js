import './App.css';
import CounterGrid from './components/CounterGrid';
import data from './data';
import styled from 'styled-components';

export default function App() {
  return (
    <div className="App">
      <ButtonContainer>
        {data.map((counter) => {
          return <CounterGrid key={counter.id} />;
        })}
      </ButtonContainer>
    </div>
  );
}

const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;
