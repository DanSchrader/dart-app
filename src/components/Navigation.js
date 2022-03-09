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
  background: #101010;

  &.active {
    background: #434343;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #555555;
  color: white;
  height: 40px;
  border-top: solid 1px #555555;
  gap: 1px;
`;
