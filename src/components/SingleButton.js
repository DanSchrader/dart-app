import styled from 'styled-components';

export default function SingleButton({ name }) {
  return (
    <ButtonItemSingle>
      <SingleCount>{name}</SingleCount>
    </ButtonItemSingle>
  );
}

const ButtonItemSingle = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
`;

const SingleCount = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px 0 0 10px;
  flex-grow: 1;
`;
