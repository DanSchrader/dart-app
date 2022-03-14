import useToggle from '../hooks/useToggle';
import styled, { css } from 'styled-components';

export default function Button50() {
  const [toggledButton, setToggledButton] = useToggle(false);
  return (
    <ButtonItemTriple>
      <TripleCount toggledButton={toggledButton} onClick={setToggledButton}>
        x2
      </TripleCount>
    </ButtonItemTriple>
  );
}

const ButtonItemTriple = styled.li`
  padding: 0;
  margin: 0;
  display: grid;
`;

const TripleCount = styled.button`
  color: #eee;
  background-color: #212121;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0;
  margin: 0;

  ${({ toggledButton }) =>
    toggledButton &&
    css`
      background-color: #eee;
      color: #101010;
    `}
`;
