import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Homepage</LinkStyled>
      <LinkStyled to="/scorekeeper">Scorekeeper</LinkStyled>
      <LinkStyled to="/dartcounter">Dart Counter</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;

  &.active {
    background: papayawhip;
    color: salmon;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #666;
  color: white;
  height: 48px;
  margin-top: 10px;
`;