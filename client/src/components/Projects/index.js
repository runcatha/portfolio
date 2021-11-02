import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-3.png'
import Icon4 from '../../images/svg-4.png'
import Logo1 from '../../images/netlify.png'
import Logo2 from '../../images/github.png'
import {
  ProjectContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
  ProjectsLinks,
  ProjectsLogo
} from './ProjectElements'

const Projects = () => {
  return (
    <ProjectContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>All I Want for Christmas</ProjectsH2>
          <ProjectsP>An app that allows users to build out their own wishlist with items that they can view, add, edit, and delete gifts they would like to receive. Users are then able to join groups and view other member's wishlists to see what they would like. This app was coded using Ruby on Rails, SQL, React, Javascript, and Heroku</ProjectsP>
          <ProjectsLinks>
            <a className="link" href="https://all-i-want-for-christmas.netlify.app/">
              <ProjectsLogo src={Logo1} />
            </a>
            <a className="link" href='https://github.com/runcatha/All-I-Want_For_Christmas'>
              <ProjectsLogo src={Logo2} />
            </a>
          </ProjectsLinks>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Tech Care</ProjectsH2>
          <ProjectsP>An app that allows codes to look up, add, edit, and delete. Users are also able to leave reviews on specific laptops and click a link to buy button that will redirect them to the retailer's website. This was a group project coded in React, Javascript, Express, MongoDB, and Heroku.</ProjectsP>
          <ProjectsLinks>
          <a className="link" href="https://tech-care.netlify.app/">
              <ProjectsLogo src={Logo1} />
            </a>
            <a className="link" href='https://github.com/runcatha/Tech-Care-app'>
              <ProjectsLogo src={Logo2} />
            </a>
          </ProjectsLinks>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>WOD React</ProjectsH2>
          <ProjectsP>An app that allows users to look up, add, edit, and delete Crossfit Workouts of the Day. Users are able to look up an equipment list to start building a home gym and click on 'sponsor adds' to be directed to popular Crossfit and Tech related companies. This app was coded with React, Javascript, and utilizes an Airtable API to organize data.</ProjectsP>
          <ProjectsLinks>
            <a className="link" href="https://wod-app.netlify.app/">
              <ProjectsLogo src={Logo1} />
            </a>
            <a className="link" href='https://github.com/runcatha/wod_react-project'>
              <ProjectsLogo src={Logo2} />
            </a>
          </ProjectsLinks>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Book Search</ProjectsH2>
          <ProjectsP>An app that allows users to look up books by title, author, or publisher. Users can also access the New York Times Best Seller's list along with getting random book recommendations. This was done by using the Google books API and vanilla Javascript.</ProjectsP>
          <ProjectsLinks>
            <a className="link" href="https://runcatha.github.io/Book_Search-project/">
              <ProjectsLogo src={Logo1} />
            </a>
            <a className="link" href='https://github.com/runcatha/Book_Search-project'>
              <ProjectsLogo src={Logo2} />
            </a>
          </ProjectsLinks>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectContainer>
  )
}

export default Projects
