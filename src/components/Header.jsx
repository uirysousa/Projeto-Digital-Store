import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import "primeicons/primeicons.css";

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  & img {
    width: 150px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & img {
      margin-bottom: 10px;
    }
  }
`;

const NavSection = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  & ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    margin: 0 15px;
  }

  & a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    & ul {
      flex-direction: column;
      align-items: center;
    }

    & li {
      margin: 5px 0;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 600px;
  margin: 0 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #79767612;
  border-radius: 2px;
  outline: none;
  background-color: #79767612;
  padding: 0 10px;

  &::placeholder {
    color: #7976766b;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    height: 35px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: large;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: medium;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 15px;
    cursor: pointer;
    padding: 5px;
    font-size: 15px;
    text-decoration: none;
    color: #333;
  }

  & i {
    color: #d82a99;
    font-size: 20px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    a {
      margin-right: 0;
      margin-bottom: 10px;
    }
    & i {
      margin-left: 0;
    }
  }
`;

const Button = styled.button`
  background-color: #c2185b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b71c5a;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopSection>
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <SearchBar>
          <SearchInput type="text" placeholder="Pesquisar produto..." />
          <SearchButton><i className="pi pi-search"></i></SearchButton>
        </SearchBar>
        <UserActions>
          <Link to={"/cadastro"}>Cadastre-se</Link>
          <Button>Entrar</Button>
          <i className="pi pi-shopping-cart"></i>
        </UserActions>
      </TopSection>
      <NavSection>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/ProductViewPage"}>Produtos</Link></li>
          <li><Link to={"/ProductListingPage"}>Categorias</Link></li>
          <li><Link to={"/meus-pedidos"}>Meus Pedidos</Link></li>
        </ul>
      </NavSection>
    </HeaderContainer>
  );
}

export default Header;
