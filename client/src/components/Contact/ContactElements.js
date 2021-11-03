import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 5%;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactForm = styled.div`
  margin-bottom: 50px
`;

export const ContactFormInput = styled.div`
`;