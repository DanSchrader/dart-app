import styled from 'styled-components';
import Button25 from './Button25';
import Button50 from './Button50';

export default function BullsEyeGrid() {
  return (
    <ButtonGrid>
      <Button25 />
      <Button50 />
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
  grid-template-columns: 1fr 1fr;
  border: none;
  border-radius: 5px;
  box-shadow: #555555 0px 1px 2px 0px, #222222 0px 2px 6px 2px;
`;
