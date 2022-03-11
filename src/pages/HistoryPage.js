import styled from 'styled-components';

export default function HistoryPage() {
  return (
    <>
      <DartHelperTitle>Dart Helper</DartHelperTitle>
      <Wrapper>
        <h2>Schau weg!</h2>
        <p>Hier gibt's noch nix!</p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  background: hotpink;
  color: white;
  padding: 20px;
`;

const DartHelperTitle = styled.h1`
  background-color: #101010;
  color: #eee;
  font-size: 2rem;
  text-align: center;
  padding: 7px 0;
  margin: 0;
  height: 48px;
  width: 100vw;
  border-bottom: solid 1px #555;
  position: fixed;
  top: 0px;
`;
