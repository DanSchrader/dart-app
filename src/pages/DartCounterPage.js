import data from '../data';
import CounterGrid from '../components/CounterGrid';
import styled from 'styled-components';

export default function DartCounterPage() {
  return (
    <ButtonContainer>
      {data.map((buttongrid) => {
        return <CounterGrid key={buttongrid.id} name={buttongrid.name} />;
      })}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;