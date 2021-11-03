import React from 'react'
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  FooterLogo
} from './FooterElements'
import Logo3 from '../../images/linkedIn.png'
import Logo2 from '../../images/github.png'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
            <FooterLink>
              <a href='https://github.com/runcatha'>
                <FooterLogo src={Logo2} />
              </a>
              <a href='https://www.linkedin.com/in/cathleen-runde-10692b204/'>
                <FooterLogo src={Logo3} />
              </a>
            </FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  )
}

export default Footer
