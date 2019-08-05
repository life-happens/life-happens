import React from 'react';
import Slider from "react-slick";


const Carrousel = (props) => {
console.log(props.date)
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 800, 
        arrows: false
        
       
    };

    return (

        // Map through image props and display like below
        <div
            className="carrousel_wrapper"
            style={{

                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${props.image[0]})`,
                            height: `${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
                {/* <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div> */}
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${props.image[1]})`,
                            height: `${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Carrousel;