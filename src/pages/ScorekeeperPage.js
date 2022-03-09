import styled from 'styled-components';

export default function Scorekeeper() {
  return (
    <ScorekeeperContainer>
      <ScorekeeperLabel>Name of the game</ScorekeeperLabel>
      <ScorekeeperInput
        type="text"
        placeholder="501-down ..."
      ></ScorekeeperInput>
      <ScorekeeperLabel>Player names</ScorekeeperLabel>
      <ScorekeeperInput
        type="text"
        placeholder="John Doe, Jane Doe, ..."
      ></ScorekeeperInput>
      <button>Create game</button>
    </ScorekeeperContainer>
  );
}

const ScorekeeperContainer = styled.form`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 10px;
  padding: 10px 0;
  background-color: #323232;
`;

const ScorekeeperLabel = styled.label`
  color: white;
`;

const ScorekeeperInput = styled.input`
  color: white;
  background-color: #656565;
  border: none;
`;
