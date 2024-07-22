import React from 'react';
import Logo from "./Logo";
import 'primeicons/primeicons.css';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';



const Gg = styled.header`
    display:flex;
    width:1440px;
    height:192px; 
    flex-direction:column;
`;

const HeaderContainer = styled.header`
    display:flex;
    width:1340px;
    height:129px;
    margin-top:34px;
    margin-left:100px;
    justify-content:space-between;
    align-items:self-start;
    & .buscar {
        display:flex;
        background-color:#474747; 
        width:559px;
        height:60px;
        border-radius:8px;
        opacity:100%;
        &::placeholder{
        color:white;
        }  
    }   
    & nav ul{
        display:flex;
    }
    & .Cadastrar{
        color:#474747;
        text-decoration:underline;
        font-size:16px;
        width:114px;
        height:44px;
        display:flex;
        align-items:center;
        border-radius:10px;
        font-family:Arial, Helvetica, sans-serif;
    } 
    & .Entrar{
        background-color:#C92071;
        text-decoration:none;
        border-color:#C92071;
        font-size:16px;
        width:114px;
        height:44px;
        display:flex;
        border-radius:10px;
        font-family:Arial, Helvetica, sans-serif;
    } 
    

`;


const Navegacao = styled.nav`
    & ul {
        display:flex;
        width:422px;
        height:29px;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        gap: 20px;
        margin-left:64px;
        margin-top:-30px;
        list-style:none;
        text-decoration: none;

        & a{
        text-decoration: none;
        color:#474747;
        font-size:16px;
        font-weight: 400;
        }
        
    }
`;



const Header = () => {

    return (
    <Gg>
        <HeaderContainer>
            <Logo />
            <form>
             <div>
                <IconField>
                    <div style={{ display:'flex' , alignItems:'center'}}>
                        <InputText className='buscar'  placeholder="Pesquisar Produto..." />
                        <InputIcon className="pi pi-search" style={{ display:'flex', color:'#474747', opacity:'50%'}}> </InputIcon>
                    </div>
                </IconField>
            </div>
            </form>
                
                <a className='Cadastrar' href="http://">Cadastre-se</a>
                
                <Button className='Entrar' label="Entrar" type="link"/>

                <div>
                <label htmlFor="compras" ></label>
                    <IconField>
                        <InputIcon className="pi pi-shopping-cart" style={{ color: '#C92071' }}> </InputIcon> 
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
     </Gg>               
    );
}
 
export default Header;
