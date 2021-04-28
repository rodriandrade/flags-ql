import {Grid, Col} from '../Grid'
import {RightPanel, LeftPanel, LeftArrowContainer, RightArrowContainer, Arrow, Container, ContinentTitle, Subtitle, Description, TextContainer, BackContainer, BackIcon, ColorContainer, FirstColor, Map} from './styled'
import FlagCard from '../FlagCard'
import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const Content = props =>{

    const countries = props.countries;
    const continent = props.continent;
    const [flagSingle, setFlagSingle] = useState(props.flagSingle)
    const [selectedFlag, setSelectedFlag] = useState('')

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1400px)'
    })

    useEffect(() => {
      if(selectedFlag){
          console.log(selectedFlag)
      }
    }, [selectedFlag])

    const handleBackButton = () =>{
        setFlagSingle(false)
        setSelectedFlag('')
        props.setShowCarousel(false)
    }

    useEffect(() => {
        if(flagSingle){
            props.setSingleFlagSelected(true)
        }
    }, [flagSingle])

    useEffect(() => {
        setFlagSingle(props.flagSingle)
    }, [props.flagSingle])

    const variants = {
        desktop_standard: { height: ["0vh", "86vh"] },
        desktop_large: { height: ["0vh", "90.5vh"] },
    }
    
    return(
        <Container>
            {isDesktopOrLaptop ?
                <LeftArrowContainer animate={props.showCarousel ? "" : { height: ["0vh", "90.5vh"] }} transition={props.showCarousel ? "" : { duration: 2 }} behauvior={props.showCarousel}>
                    {/*<Arrow src="/left-arrow.svg" />*/}
                    <span>FlagsQL</span>
                </LeftArrowContainer>
            : 
                <LeftArrowContainer animate={props.showCarousel ? "" : { height: ["0vh", "86vh"] }} transition={props.showCarousel ? "" : { duration: 2 }} behauvior={props.showCarousel}>
                    {/*<Arrow src="/left-arrow.svg" />*/}
                    <span>FlagsQL</span>
                </LeftArrowContainer>
            }
            <LeftPanel>
            {!flagSingle ?
                <TextContainer animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Subtitle>Flags of</Subtitle>
                    <ContinentTitle>{continent}</ContinentTitle>
                </TextContainer>
            : 
                <>
                <TextContainer animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Map src="/germany.svg" />
                    <ContinentTitle>{props.flag ? props.flag.name : selectedFlag.name}</ContinentTitle>
                    <Description>{props.flag ? props.flag.flag_info : selectedFlag.flag_info}</Description>
                </TextContainer>
                <ColorContainer>
                {/*
                    <FirstColor color="red"/>
                    <FirstColor color="black"/>
                    <FirstColor color="blue"/>
                */}
                </ColorContainer>
                </>
            }
            </LeftPanel>
            <RightPanel>
                {flagSingle && 
                    <BackContainer onClick={handleBackButton} whileHover={{ translateX: -3 }}>
                        <BackIcon src="/back.svg" alt="back_arrow" />
                        <span>Back</span>
                    </BackContainer> 
                }
                {!flagSingle ?
                    <Grid colGap={0} rowGap={0} >
                        {countries && countries.map((country, index) => <FlagCard data={country} setFlagSingle={setFlagSingle} setSelectedFlag={setSelectedFlag} index={index} showCarousel={props.showCarousel} setShowCarousel={props.setShowCarousel} countries={countries} currentFlag={props.currentFlag} setCurrentFlag={props.setCurrentFlag} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}/>)} 
                    </Grid>
                : 
                <>
                    <FlagCard flag={selectedFlag} flagSingle={flagSingle} setFlagSingle={setFlagSingle} setSelectedFlag={setSelectedFlag} other={props.flag} showCarousel={props.showCarousel} setShowCarousel={props.setShowCarousel} countries={countries} currentFlag={props.currentFlag} setCurrentFlag={props.setCurrentFlag} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} />
                </>
                }
            </RightPanel>
            {isDesktopOrLaptop ?
                <RightArrowContainer animate={{ height: ["0vh", "90.5vh"] }} transition={{ duration: 2 }}>
                    {/*<Arrow src="/right-arrow.svg" />*/}
                    <span>FlagsQL</span>
                </RightArrowContainer>
            :
                <RightArrowContainer animate={{ height: ["0vh", "86vh"] }} transition={{ duration: 2 }}>
                    {/*<Arrow src="/right-arrow.svg" />*/}
                    <span>FlagsQL</span>
                </RightArrowContainer>
            }
        </Container>
    )
}

export default Content