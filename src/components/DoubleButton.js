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
  display: grid;
`;

const DoubleCount = styled.button`
  color: #eee;
  background-color: #212121;
  border: none;
  padding: 0;
  margin: 0;
`;
