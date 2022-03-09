import styled from 'styled-components';

export default function DoubleButton() {
  return (
    <ButtonItemDouble>
      <DoubleCount>x2</DoubleCount>
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
  background-color: #212121;
  border: none;
  flex-grow: 1;
`;
