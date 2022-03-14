import styled from 'styled-components';
import SingleButton from './SingleButton';
import DoubleButton from './DoubleButton';
import TripleButton from './TripleButton';

export default function CounterGrid({ name }) {
  return (
    <ButtonGrid>
      <SingleButton name={name} />
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
  width: 30vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: none;
  border-radius: 5px;
  box-shadow: #555555 0px 1px 2px 0px, #222222 0px 2px 6px 2px;
`;
