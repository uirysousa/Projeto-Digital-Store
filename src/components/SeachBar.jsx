import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


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

const Produtos = [
  "K-Swiss V8 - Masculino",
]

function BarraPesquisa() {
  const [busca, setBusca] = useState('');
  console.log(busca);

  const lowerBusca = busca.toLowerCase;

  const ProdutosFiltrados = Produtos
    .filter ((produto)=> produto.toLowerCase().includes(lowerBusca));

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/ProductListingPage?filter=${busca}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBar>
      <SearchInput
        type="text"
        placeholder="Pesquisar produtos"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    <SearchButton><i className="pi pi-search" onClick={handleSearch}></i></SearchButton>
    
    <ul>
        {ProdutosFiltrados.map((produto) =>
        <li key={produto}>{produto}</li>
        )}
    </ul>
    </SearchBar>
  );
}

export default BarraPesquisa;