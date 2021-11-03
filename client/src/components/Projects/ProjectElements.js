import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectsIcon = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  margin-top: 10%;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5%;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const ProjectsLinks = styled.div`
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
`;

export const ProjectsLogo = styled.img`
  height: 40%;
  width: 40%;
  margin-bottom: 10px;
`;