import styled from 'styled-components';

export default function HomePage() {
  return (
    <Wrapper>
      <h1>Schau weg!</h1>
      <p>Hier gibt's noch nix!</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: hotpink;
  color: white;
  padding: 20px;
`;
