import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Dart Helper</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: grid;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #eee;
  background: #101010;
  margin: 0;
  padding: 0;

  &.active {
    background: #ddd;
    color: #101010;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #555555;
  height: 48px;
  width: 100vw;
  border-top: solid 1px #555;
  gap: 1px;
  position: fixed;
  bottom: 0px;
  margin: 0;
  padding: 0;
`;
