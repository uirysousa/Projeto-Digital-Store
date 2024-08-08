import React from 'react'; 
import { Button } from 'primereact/button';
import styled from 'styled-components';

const SectionConteiner = styled.header` 
    display:flex;
    flex-wrap:wrap;
    width: 1440px;
    height:700px;
    margin-top: 50px;
    margin-bottom: 50px;
    &&
    h2{
      display:flex;
      text-align:center;
      justify-content:center;
      font-size:30px;
      margin-left:85px;
      color:#474747;
      width:400px;
      height:38px;  
    }
    && div{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-Radius:4px;
    margin-right: -46px;
    margin-left: 2px;
    }
    && .p-button{
    background-color:#F5F5F5;
    color:#C92071;
    font-size:16px;
    font-weight:bold;
    display:flex;
    position:relative;
    top:80px;
    right:335px;
    width:153px;
    height:48px;
    border-radius:6px;
    }
    && 
    h3{
      display:flex;
      text-align:center;
      justify-content:center;
      font-size:30px;
      margin-left:85px;
      color:#474747;
      width:283px;
      height:38px;  
    }  
`
const Colecao2 = styled.header`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap;
    width: 1400px;
    height:400px;
    margin-top: 5px;
    margin-bottom:100px;
    && 
    
    img{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-Radius:4px;
    margin-right: -46px;
    margin-left: 2px;
    }
`

const Section = () => {
    return (
        <SectionConteiner>
            <h2 className="title">Coleções em destaque</h2>
            <div>
                <Button label="Comprar"/>
                <div>
                    <img src="./public/collection-1.png" alt="colecao 1" style={{borderRadius:'4px'}} />
                </div>
                    <Button label="Comprar"/>
                <div>
                    <img src="./public/collection-2.png" alt="colecao 2" style={{borderRadius:'4px'}} />
                 </div>
                 <Button label="Comprar"/>
                <div>
                     <img src="./public/collection-3.png" alt="colecao 3" style={{borderRadius:'4px'}} />
                </div>
                <Button label="Comprar"/>
            </div>
               
            <Colecao2>
                <h3 className="title2">Coleções em destaque</h3>
                <div>
                    <img src="./public/galeria.png" alt="galeria2" />
                </div>
            </Colecao2>

        </SectionConteiner>
      );
}
 
export default Section;