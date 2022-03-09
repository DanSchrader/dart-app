import styled from 'styled-components';

export default function DoubleButton() {
  return (
    <ButtonItemDouble>
      <DoubleCount>2</DoubleCount>
    </ButtonItemDouble>
  );
}

const ButtonItemDouble = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
`;

const DoubleCount = styled.button`
  color: white;
  background-color: #222222;
  border: none;
  flex-grow: 1;
`;
