import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // a
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to='/'>cathleen</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
              <a href="https://drive.google.com/file/d/1MHDD_8j3FSJeQWfyxnmNnz-pJ9SmmAN8/view?usp=sharing">Resume</a></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
