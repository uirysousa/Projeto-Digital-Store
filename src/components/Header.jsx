import React from 'react';
import Logo from "./Logo";
import 'primeicons/primeicons.css';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';



const HeaderContainer = styled.header`
    display:flex;
    width:"1440px";
    height:"192px";
    justify-content:space-between;
    & nav ul{
        display:flex;
    }
    & Button{
        background-color:#474747;
        text-decoration:underline;
        font-size:"16px";
        width:"114px";
        height:"44px";
        display:flex;
    } 

`;

const Navegacao = styled.nav`
    & ul {
        display:flex;
        width:"422px";
        height:"29px";
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        gap: 20px;
    }
    & ul li{
        display:flex;
    }
`;



const Header = () => {

    return (
    <>
        <HeaderContainer>
            <Logo />
            <form>
                <label htmlFor="buscar" className='block uppercase font-bold text-sm mb-1'></label>
                <div className="flex">
                    <IconField>
                        <InputText  placeholder="Pesquisar Produto..." />
                        <InputIcon className="pi pi-search"> </InputIcon>
                    </IconField>
                </div>
            </form>
                <Button className='Cadastrar' label="Cadastre-se" type="link"/>

                <Button label="Entrar" type="link"/>

                <div>
                <label htmlFor="compras" ></label>
                    <IconField>
                        <InputIcon className="pi pi-shopping-cart"> </InputIcon> 
                    </IconField>  
                </div>      
        </HeaderContainer>
        <Navegacao>
                   <nav>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/"}>Produtos</NavLink></li>
                            <li><NavLink to={"/"}>Categorias</NavLink></li>
                            <li><NavLink to={"/"}>Meus Pedidos</NavLink></li>
                        </ul>
                   </nav>
        </Navegacao>    
     </>               
    );
}
 
export default Header;
