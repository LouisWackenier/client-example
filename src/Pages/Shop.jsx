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
     margin-left: 15%;
`;

const Shopcontainer = styled.div`
     display: inline-block;
     padding: 100px;
`;

const ShopItemText = styled.div`
      
`;

const ShopItemParagraph = styled.div`

`;

const BuyButton = styled.button`
    margin-top: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 7px;
    font-size: 15px;     
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

         {/* Shop Section */}
         <ShopSection>
            {/*Shop Item 1*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 1</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
            {/*Shop Item 2*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 2</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
            {/*Shop Item 3*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 3</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
             {/*Shop Item 4*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 4</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
             {/*Shop Item 5*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 5</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
             {/*Shop Item 6*/}
             <Shopcontainer>
                 <ShopItemText>Shop Item 6</ShopItemText>
                 <ShopItemParagraph>Lorem ipsum dolor sit amet.</ShopItemParagraph>
                 <BuyButton>Buy Now</BuyButton>
             </Shopcontainer>
         </ShopSection>
    </ContainerTitle>

  )
}

export default Shop