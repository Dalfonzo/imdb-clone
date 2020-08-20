import React from 'react';
import Controls from './carousel-controls/Controls';

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Controls
      direction="back"
      onClick={onClick}
      style={{
        position: 'absolute',
        zIndex: '100',
        transform: 'translateY(-45%)',
        top: '45%',
        left: '1rem',
      }}
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Controls
      direction="forward"
      onClick={onClick}
      style={{
        position: 'absolute',
        zIndex: '100',
        transform: 'translateY(-45%)',
        top: '45%',
        right: '1rem',
      }}
    />
  );
}
