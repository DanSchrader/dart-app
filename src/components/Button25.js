import styled from 'styled-components';

export default function Button25() {
  return (
    <ButtonItemSingle>
      <SingleCount>25</SingleCount>
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
  border-radius: 10px 0 0 10px;
  padding: 0;
  margin: 0;
`;
