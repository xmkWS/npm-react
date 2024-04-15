import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SliderC.css'
import img1 from '/slider/1.jpg'
import img2 from '/slider/2.jpg'
import img3 from '/slider/3.jpg'

export default function SliderC() {
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
        <>

        <div className="container">
            <div className="slider_place">
            <h1>Slider</h1>
                <Slider {...setting}>
                    <div className='slide'>
                        <img src={img1}/>
                    </div>
                    <div className='slide'>
                        <img src={img2}/>
                    </div>
                    <div className='slide'>
                        <img src={img3}/>
                    </div>
                </Slider>
            </div>
        </div>
        
        </>
    )
  }
