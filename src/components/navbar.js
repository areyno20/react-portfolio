import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const NavBrand = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0.2rem;
  padding: 0.5rem;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav className='bg-gray-400 top-0 z-10 text-white justify-right md:sticky md:mr-auto md:border-l md:border-gray-700'>
      <NavBrand href="#">Aidan Reynolds</NavBrand>
      <NavLinks>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;