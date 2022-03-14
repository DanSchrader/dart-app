import useToggle from '../hooks/useToggle';
import styled, { css } from 'styled-components';

export default function DoubleButton() {
  const [toggledButton, setToggledButton] = useToggle(false);
  return (
    <ButtonItemDouble>
      <DoubleCount toggledButton={toggledButton} onClick={setToggledButton}>
        x2
      </DoubleCount>
    </ButtonItemDouble>
  );
}

const ButtonItemDouble = styled.li`
  padding: 0;
  margin: 0;
  display: grid;
`;

const DoubleCount = styled.button`
  color: #eee;
  background-color: #212121;
  border: none;
  padding: 0;
  margin: 0;

  ${({ toggledButton }) =>
    toggledButton &&
    css`
      background-color: #eee;
      color: #101010;
    `}
`;
