import useToggle from '../hooks/useToggle';
import styled, { css } from 'styled-components';

export default function SingleButton({ name }) {
  const [toggledButton, setToggledButton] = useToggle(false);

  return (
    <ButtonItemSingle>
      <SingleCount toggledButton={toggledButton} onClick={setToggledButton}>
        {name}
      </SingleCount>
    </ButtonItemSingle>
  );
}

const ButtonItemSingle = styled.li`
  padding: 0;
  margin: 0;
  display: grid;
`;

const SingleCount = styled.button`
  color: #eee;
  background-color: #101010;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0;
  margin: 0;

  ${({ toggledButton }) =>
    toggledButton &&
    css`
      background-color: #eee;
      color: #101010;
    `}
`;
