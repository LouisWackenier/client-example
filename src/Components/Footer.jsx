//STYLED COMPONENTS
import styled from 'styled-components';

const FooterContainer = styled.div`
        bottom: 0;
        position: absolute;
        margin-bottom: 10px; 
        margin-left: 50px;
        background-color: #041427;
        width: 97%;
`;

const Footer = () => {
  return (
    <FooterContainer>@2023 Louis Dev</FooterContainer>
  )
}

export default Footer