import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1340px;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  text-align: left;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const ColumnText = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 100px;
  margin: 0 auto;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
`;

const Copyright = styled.div`
  border-top: 1px solid #444;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Digital Store</ColumnTitle>
          <ColumnText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </ColumnText>
          <SocialLinks>
            <SocialLink href="#"><i className="fa fa-facebook"></i></SocialLink>
            <SocialLink href="#"><i className="fa fa-instagram"></i></SocialLink>
            <SocialLink href="#"><i className="fa fa-twitter"></i></SocialLink>
          </SocialLinks>
        </Column>
        <Column>
          <ColumnTitle>Informação</ColumnTitle>
          <ColumnText>Sobre Drip Store</ColumnText>
          <ColumnText>Segurança</ColumnText>
          <ColumnText>Wishlist</ColumnText>
          <ColumnText>Blog</ColumnText>
          <ColumnText>Trabalhe conosco</ColumnText>
          <ColumnText>Meus Pedidos</ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Categorias</ColumnTitle>
          <ColumnText>Camisetas</ColumnText>
          <ColumnText>Calças</ColumnText>
          <ColumnText>Bonés</ColumnText>
          <ColumnText>Headphones</ColumnText>
          <ColumnText>Tênis</ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Contato</ColumnTitle>
          <ColumnText>Av. Santos Dumont, 1510 - 1 andar</ColumnText>
          <ColumnText>Aldeota, Fortaleza - CE, 60150-161</ColumnText>
          <ColumnText>(85) 3051-3411</ColumnText>
        </Column>
      </FooterContent>
      <Copyright>
        &copy; 2022 Digital College
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
