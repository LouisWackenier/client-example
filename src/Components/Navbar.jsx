//STYLED COMPONENTS
import styled from 'styled-components';

const NavbarContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
`;

const NavbarButton = styled.div`
        margin: 10px;
        height: 50px;
        width: 100px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
       text-decoration: underline;
       color: white;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
             <NavbarButton>Home</NavbarButton>
             <NavbarButton>Blog</NavbarButton>
             <NavbarButton>Shop</NavbarButton>
    </NavbarContainer>
  )
}

export default Navbar