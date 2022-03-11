import styled from 'styled-components';

export default function DartHelper() {
  return (
    <>
      <DartHelperTitle>Dart Helper</DartHelperTitle>
      <DartHelperContainer action="#">
        <DartHelperLabel>Select your game</DartHelperLabel>
        <DartHelperSelect>
          <option value="301">301</option>
          <option value="501">501</option>
          <option value="701">701</option>
          <option value="901">901</option>
        </DartHelperSelect>
        <DartHelperLabel>Add Players</DartHelperLabel>
        <DartHelperInput
          type="text"
          placeholder="Jane, John, Jill, Jack..."
        ></DartHelperInput>
        <CreateButton type="submit">CREATE GAME</CreateButton>
      </DartHelperContainer>
    </>
  );
}

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

const DartHelperContainer = styled.form`
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 20px;
  padding: 20px 0;
  background-color: #323232;
`;

const DartHelperLabel = styled.label`
  color: #eee;
  font-size: 114%;
  margin-top: 20px;
`;

const DartHelperSelect = styled.select`
  width: 50vw;
  height: 3rem;
  font-size: 200%;
  font-weight: bold;
  text-align: center;
`;

const DartHelperInput = styled.input`
  color: white;
  background-color: #656565;
  border: none;
  width: 50vw;
  height: 3rem;
  border-radius: 5px;
  font-size: 114%;
  padding: 0 10px;
`;

const CreateButton = styled.button`
  height: 3rem;
  width: 50vw;
  font-weight: bold;
  font-size: 114%;
  margin-top: 50px;
`;
