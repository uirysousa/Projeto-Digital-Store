import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageContainer = styled.div`
  width: 100%;
  height: 570px;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image.src} alt={`Product ${index + 1}`} />
        </ImageContainer>
      ))}
    </Slider>
  );
};

export default Gallery;
