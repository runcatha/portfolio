import React from 'react'
import Video from '../../videos/video.mp4'
import {
  AboutMeContainer,
  AboutMeBg,
  VideoBg,
  AboutMeContent,
  AboutMeImg,
  AboutMeH2,
  AboutMeH1,
  AboutMeP
} from './AboutMeElements'

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </AboutMeBg>
      <AboutMeContent>
        <AboutMeH1 id='about'>About Me</AboutMeH1>
        <AboutMeImg src="https://i.imgur.com/HCm5d7s.png?1"
            alt='profile-pic' />
        <AboutMeH2>Cathleen Runde</AboutMeH2>
        <AboutMeP>I am a client-centered Full-stack Web Developer who gained a passion for problem solving and working with teams from my time in veterinary care and Air Force ROTC. I look forward to leveraging my skills in leadership, public speaking, and attention to detail to contribute to my future team.</AboutMeP>
      </AboutMeContent>
    </AboutMeContainer>
  )
}

export default AboutMe
