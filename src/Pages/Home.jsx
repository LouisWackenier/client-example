//STYLED COMPONENTS
import  styled  from 'styled-components';

const Section = styled.div`
    height: 100%;
`;

const Title = styled.div`
     font-size: 50px;
     margin-top: 15%;
     justify-content: center;
     align-items: center;
     display: flex;
`;

const BreakLine = styled.div`
      margin-left: 30%;
      width: 40%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgb(255, 255, 255); /* Color of the separate line */
      z-index: 1;
`;

const HomeButtonRight = styled.button`
      justify-content: center;
      align-items: center;
      margin: 10px;
      margin-left: 42%;
      border-radius: 7px;
      letter-spacing: 5px;
      cursor: pointer;

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

      font-size: larger;
      height: 45px;
      width: 150px;
`;

const Home = () => {
  return (
    <Section>
        <Title>Your Future website awaits</Title>
        <BreakLine />
        <HomeButtonRight>Button</HomeButtonRight>
        <HomeButtonLeft>Button</HomeButtonLeft>
    </Section>
  )
}

export default Home