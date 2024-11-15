import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import Slide from './Slide';
import { observer } from 'mobx-react-lite';
import sliderStore from '../../store/SliderStore';

const Slider = observer(() => {
  const slides = sliderStore.slides;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="container-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <Slide img={slide.img} name={slide.name} des={slide.des} />
          </div>
        ))}

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: slides.length }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Slider;