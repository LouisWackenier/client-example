//STYLED COMPONENTS
import styled from 'styled-components';

const FooterContainer = styled.div`
        bottom: 0;
        position: absolute;
        padding: 35px;
        background-color: #041427;
        width: 95.9%;
`;

const Footer = () => {
  return (
    <FooterContainer>@2023 Louis Dev</FooterContainer>
  )
}

export default Footer