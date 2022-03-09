import styled from 'styled-components';

export default function TripleButton() {
  return (
    <ButtonItemTriple>
      <TripleCount>x3</TripleCount>
    </ButtonItemTriple>
  );
}

const ButtonItemTriple = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
`;

const TripleCount = styled.button`
  color: white;
  background-color: #444444;
  border: none;
  border-radius: 0 10px 10px 0;
  flex-grow: 1;
`;
