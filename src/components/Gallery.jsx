const Gallery = ({title,images}) => {
    return (
    <div className="Gallery-conteiner">
        <ul>
            {images.map((info,index) => (
                <li key={index}>
                      <div>
                        <h2>{title}</h2>
                        <p> {info.title}</p>
                        <button>{info.text}</button> 
                       </div>
                        <img src={info.imagem} width="800px" height="600px" />
                    </li>
             ))}
        </ul>      
    </div>

      );
}
 
export default Gallery;