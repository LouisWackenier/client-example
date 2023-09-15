// STYLED COMPONENTS
import styled from 'styled-components';

import imgBackground from '../assets/Background_Image.png';

const Section = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content at the top of the container */
`;

const BackgroundImageContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${imgBackground});
    background-size: cover; 
    background-position: center; /* Center the background image */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content at the top of the container */
`;

const Title = styled.div`
     font-size: 50px;
     margin-top: 15%;
     justify-content: center;
     align-items: center;
     background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
     display: flex;
     text-shadow: 
     -1px -3px 0 #000, /* Top-left */
      1px -3px 0 #000,  /* Top-right */
      -1px 3px 0 #000,  /* Bottom-left */
       1px 3px 0 #000;   /* Bottom-right */
`;

const BreakLine = styled.div`
      margin-left: 30%;
      width: 40%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgb(255, 255, 255); /* Color of the separate line */
      display: flex;
`;

const ButtonContainer =styled.div`
        background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
`;

const HomeButtonRight = styled.button`
      justify-content: center;
      align-items: center;
      margin: 10px;
      margin-left: 42%;
      border-radius: 7px;
      letter-spacing: 5px;
      cursor: pointer;
      background-color: purple;

      font-size: larger;
      height: 45px;
      width: 150px;
`;

const HomeButtonLeft = styled.button`
      justify-content: center;
      align-items: center;
      margin: 10px;
      border-radius: 7px;
      letter-spacing: 5px;
      cursor: pointer;
      background-color: purple;

      font-size: larger;
      height: 45px;
      width: 150px;
`;

const Home = () => {
  return (
    <Section>
      <BackgroundImageContainer>
        <Title>Your Future website awaits</Title>
        <BreakLine />
        <ButtonContainer>
           <HomeButtonRight>Button</HomeButtonRight>
           <HomeButtonLeft>Button</HomeButtonLeft>
        </ButtonContainer>
      </BackgroundImageContainer>
    </Section>
  );
};

export default Home;
