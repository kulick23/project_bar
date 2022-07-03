import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import Slide from './Slide'

const Slider = (props) =>{
    let SlideItem = props.state.party.map (p => <Slide img = {p.img} id={p.id} name={p.name} des={p.des}/>) 
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== SlideItem.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === SlideItem.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(SlideItem.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
 
    console.log(SlideItem  )

    return (
     

        <div>
            
        <div className="container-slider"> 
            {SlideItem.map((SlideItem, index) => {
                return (
                    <div 
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                   {SlideItem}
                    </div>
                )
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: SlideItem.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
  
        
        </div>
    )
  }
  export default Slider

  


