import React from 'react';
import { Carousel, Container } from 'react-bootstrap'
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import logo from "../logo.svg";

export default function BootstrapCarousel () {  
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const CarouselStyle = {
        height: "100vh",
        width: "100vw",
        objectFit: "cover"
    }

    const CaptionStyle = {
        height: '38px',
        paddingTop: '200px',
        bottom: '0',
        paddingBottom: '0',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const fontsize = {
        fontSize: '30pt'
    }

    return (
        <div>
        <img
            src={logo}
            width="150"
            height="150"
            alt="ume logo"
            style={{ 
                position: "absolute",
                zIndex: '10',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        />
        <Carousel interval="2500" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    src={ img1 }
                    alt="First slide"
                    style={ CarouselStyle }
                />
                <Carousel.Caption style={ CaptionStyle } >
                    <h2 style={fontsize} >The leading fund distribution due diligence platform</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={ img2 }
                    alt="Second slide"
                    style={ CarouselStyle }
                />
                <Carousel.Caption style={ CaptionStyle } >
                <h2>Easily exchange due diligence information</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={ img3 }
                    alt="Third slide"
                    style={ CarouselStyle }
                />
                <Carousel.Caption style={ CaptionStyle } >
                <h2>Grow your provider and distributor networks</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}