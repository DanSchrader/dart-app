import data from '../data';
import CounterGrid from '../components/CounterGrid';
import BullsEyeGrid from '../components/BullsEyeGrid';
import styled from 'styled-components';

export default function DartCounterPage() {
  return (
    <>
      <DartHelperTitle>Dart Helper</DartHelperTitle>
      <ButtonContainer>
        {data.map((buttongrid) => {
          return <CounterGrid key={buttongrid.id} name={buttongrid.name} />;
        })}
        <BullsEyeGrid />
      </ButtonContainer>
    </>
  );
}

const DartHelperTitle = styled.h1`
  background-color: #101010;
  color: #eee;
  font-size: 2rem;
  text-align: center;
  padding: 7px 0;
  margin: 0;
  height: 48px;
  width: 100vw;
  border-bottom: solid 1px #555;
  position: fixed;
  top: 0px;
`;

const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
  margin: 0;
`;
