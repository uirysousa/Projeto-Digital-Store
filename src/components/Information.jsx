import React from "react";
const Information = ({title,informations}) => {
    return (
        <div className="informacoes-conteiner">
            <h2>{title}</h2>
            <ul>
                {informations.map((info,index) => (
                    <li key={index}>
                        <a href={info.link}>{info.text}</a>
                    </li>
        ))}
            </ul>
        </div>
      );
}
 
export default Information;