import styled from 'styled-components';
import SingleButton from './SingleButton';
import DoubleButton from './DoubleButton';
import TripleButton from './TripleButton';

export default function CounterGrid() {
  return (
    <ButtonGrid>
      <SingleButton />
      <DoubleButton />
      <TripleButton />
    </ButtonGrid>
  );
}

const ButtonGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: none;
`;
