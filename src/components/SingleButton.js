import styled from 'styled-components';

export default function SingleButton() {
  return <SingleCount>1</SingleCount>;
}

const SingleCount = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px 0 0 10px;
`;
