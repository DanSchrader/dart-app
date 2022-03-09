import styled from 'styled-components';

export default function TripleButton() {
  return <TripleCount>3</TripleCount>;
}

const TripleCount = styled.button`
  color: white;
  background-color: #444444;
  border: none;
  border-radius: 0 10px 10px 0;
`;
