const Gallery = ({title,images}) => {
    return (
    <div className="Gallery-conteiner">
        <h2>{title}</h2>
        <ul>
            {images.map((info,index) => (
                    <li key={index}>
                        {info.title}
                       <button>{info.text}</button> 
                        {<img src={info.imagem} width="733.51px" height="431.61px" />}
                    </li>
             ))}
        </ul>      
    </div>

      );
}
 
export default Gallery;