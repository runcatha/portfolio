import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>
            About Me
          </SidebarLink>
          <SidebarLink to='projects'>
            Projects
          </SidebarLink>
          <SidebarLink href="https://drive.google.com/file/d/1MHDD_8j3FSJeQWfyxnmNnz-pJ9SmmAN8/view?usp=sharing">
            Resume
          </SidebarLink>
          <SidebarLink to='contact'>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
