import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React,{useState, useEffect} from 'react'
import Content from '../Content'
import {LeftArrowContainer, RightArrowContainer, Arrow} from './styled'
import next from 'next';

const CarouselSlider = props =>{

    const [countries, setCountries] = useState(props.countries)
    const [singleFlagSelected, setSingleFlagSelected] = useState(false)

    useEffect(() => {
      setCountries(props.countries)
    }, [props.countries])

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const funcRight = () =>{
      console.log("hola")
    }

    const funcLeft = () =>{
      console.log("hola")
    }

    const CustomLeftArrow = ({ onClick }) => {
      return <LeftArrowContainer><Arrow animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className="custom-left-arrow" src="/left-arrow.svg" onClick={() => { onClick(); funcLeft();}} /></LeftArrowContainer>
    };

    const CustomRightArrow = ({ onClick }) => {
      return <RightArrowContainer><Arrow animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className="custom-right-arrow" src="/right-arrow.svg" onClick={() => { onClick(); funcRight();}}/></RightArrowContainer>
    };

    return (
      <Carousel
        customRightArrow={<CustomRightArrow animate={{ opacity: 1 }} transition={{ duration: 0.1 }}/>}
        customLeftArrow={<CustomLeftArrow animate={{ opacity: 1 }} transition={{ duration: 0.1 }}/>}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {props.flagsToShow && props.flagsToShow.map((country, index) => <Content flag={country} flagSingle={true} countries={countries} continent={props.continent} singleFlagSelected={singleFlagSelected} setSingleFlagSelected={setSingleFlagSelected} showCarousel={props.showCarousel} setShowCarousel={props.setShowCarousel} order="reverse"/>)}
      </Carousel>
    )

  }

export default CarouselSlider
