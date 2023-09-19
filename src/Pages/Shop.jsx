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

const ShopSection = styled.div`
    
`;

const Shopcontainer = styled.div`
    
`;

const ShopItemText = styled.div`
      
`;

const ShopItemParagraph = styled.div`

`;

const ItemImg = styled.div``;

const Shop = () => {
  return (
    <ContainerTitle>
         <ContainerTitleText>Welcome to the shop</ContainerTitleText>
         <ContainerTitleSub>
               In this section you can add and sell your products
         </ContainerTitleSub>
         <Breakline />
         <ShopSection>
            {/*Shop Item 1*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 1</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
             </Shopcontainer>
            {/*Shop Item 2*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 2</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
             </Shopcontainer>
            {/*Shop Item 2*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 3</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
             </Shopcontainer>
         </ShopSection>
    </ContainerTitle>

  )
}

export default Shop