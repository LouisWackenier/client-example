import styled from 'styled-components'



const ContainerTitle = styled.div`
        
`;

const ContainerTitleText = styled.h1`
      margin-left: 40%;
`;
const ContainerTitleSub = styled.h4`
      margin-left: 38%;
`;
const Breakline = styled.div`
      margin-left: 37%;
      width: 25%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(255, 255, 255, 0.5); /* Color of the separate line */
`;

const Shop = () => {
  return (
    <ContainerTitle>
         <ContainerTitleText>Welcome to the shop</ContainerTitleText>
         <ContainerTitleSub>
               In this section you can add and sell your products
         </ContainerTitleSub>
         <Breakline />
    </ContainerTitle>

  )
}

export default Shop