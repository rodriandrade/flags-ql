import {Grid, Col} from '../Grid'
import {FlagImage, CountryName, Container} from './styled'
import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"

const FlagCard = props =>{

    const handleFlag = () =>{
        props.setFlagSingle(true)
        props.setShowCarousel(true)
        props.setCurrentFlag(props.data)
    }

    return(
        <>
        {!props.flagSingle ?
            <Col desktop={4} tablet={4} mobile={6}>
                <Container onClick={handleFlag} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                    <FlagImage src={props.data.flag} alt={props.data.name} />
                    <CountryName>{props.data.name}</CountryName>
                </Container>
            </Col>
        :

            <Container size="large" animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                <FlagImage src={props.other ? props.other.flag : props.flag.flag} alt={props.other ? props.other.name : props.flag.name} size="large" />
            </Container>
 
        }
        </>
    )
}

export default FlagCard