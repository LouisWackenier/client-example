import styled from "styled-components";

const ContainerTitle = styled.div`
     margin-left: 37%;
`;
const TitleSub = styled.div``;

const Title = styled.h1`
    font-size: 30px;
    
`;

const MainContainer = styled.div`
    margin-top: 10%;
    display: flex;
`;

const Blog = () => {
  return (
    <div>
      <ContainerTitle>
         <Title>Welcome to the Blog page</Title>
      </ContainerTitle>
      <MainContainer>
           
      </MainContainer>
    </div>
  )
}

export default Blog