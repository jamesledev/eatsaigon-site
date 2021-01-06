import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Bun from '../images/food/bun.jpg';
import Pho from '../images/food/pho.jpg';
import Rice from '../images/food/rice.jpg';
import Udon from '../images/food/udon.jpg';
import Prawns from '../images/food/prawns.jpg';
import Salad from '../images/food/salad.jpg';
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={Bun} className="foodPics" alt="" />,
  <img src={Pho} className="foodPics" alt="" />,
  <img src={Rice} className="foodPics" alt="" />,
  <img src={Udon} className="foodPics" alt="" />,
  <img src={Prawns} className="foodPics" alt="" />,
  <img src={Salad} className="foodPics" alt="" />,
];

export default function Carousel() {
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        disableButtonsControls
        mouseTracking
        items={items}
        infinite
      />
    </>
  );
}
