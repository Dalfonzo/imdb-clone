import React from 'react';
import Controls from '../carousel/carousel-controls/Controls';

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
        transform: 'translateY(-40%)',
        top: '40%',
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
        transform: 'translateY(-40%)',
        top: '40%',
        right: '1rem',
      }}
    />
  );
}
